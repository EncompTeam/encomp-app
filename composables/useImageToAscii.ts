export function useImageToAscii() {
  const asciiImage: Ref<string> = ref('')
  const intervalId: Ref<number | null> = ref(null)
  const grayRamp = '$%@&#*. '
  const grayRamp2 = '$@%&#*'
  const rampLength = grayRamp.length
  const ramp2Length = grayRamp2.length

  const toGrayScale = (r: number, g: number, b: number): number => 0.21 * r + 0.72 * g + 0.07 * b

  const getFontRatio = (): number => {
    const pre = document.createElement('pre')
    pre.style.display = 'inline'
    pre.textContent = ' '

    document.body.appendChild(pre)
    const { width, height } = pre.getBoundingClientRect()
    document.body.removeChild(pre)

    return height / width
  }

  const convertToGrayScales = (context: CanvasRenderingContext2D, width: number, height: number): number[] => {
    const imageData = context.getImageData(0, 0, width, height)
    const grayScales: number[] = []

    for (let i = 0; i < imageData.data.length; i += 4) {
      const r = imageData.data[i]
      const g = imageData.data[i + 1]
      const b = imageData.data[i + 2]

      const grayScale = toGrayScale(r, g, b)
      imageData.data[i] = imageData.data[i + 1] = imageData.data[i + 2] = grayScale

      grayScales.push(grayScale)
    }

    context.putImageData(imageData, 0, 0)
    return grayScales
  }

  const MAXIMUM_WIDTH = 40
  const MAXIMUM_HEIGHT = 35

  const clampDimensions = (width: number, height: number): [number, number] => {
    const rectifiedWidth = Math.floor(getFontRatio() * width)

    if (height > MAXIMUM_HEIGHT) {
      const reducedWidth = Math.floor(rectifiedWidth * MAXIMUM_HEIGHT / height + 20)
      return [reducedWidth, MAXIMUM_HEIGHT]
    }

    if (width > MAXIMUM_WIDTH) {
      const reducedHeight = Math.floor(height * MAXIMUM_WIDTH / rectifiedWidth)
      return [MAXIMUM_WIDTH, reducedHeight]
    }

    return [rectifiedWidth, height]
  }

  const getCharacterForGrayScale = (grayScale: number): string => grayRamp[Math.ceil((rampLength - 1) * grayScale / 255)]

  const drawAscii = (grayScales: number[], width: number): string => {
    return grayScales.reduce((asciiImage, grayScale, index) => {
      let nextChars = getCharacterForGrayScale(grayScale)
      if ((index + 1) % width === 0) {
        nextChars += '\n'
      }
      return asciiImage + nextChars
    }, '')
  }

  const randomizeAscii = (asciiStr: string): string => {
    return asciiStr.split('\n').map((line) => {
      return line.split('').map((char) => {
        if (char === ' ' || char === '\n') {
          return char
        }
        if (Math.random() > 0.9) { // 10% chance to change the character
          return grayRamp2[Math.floor(Math.random() * ramp2Length)]
        }
        return char
      }).join('')
    }).join('\n')
  }

  const startAnimation = (): void => {
    if (intervalId.value !== null) {
      clearInterval(intervalId.value)
    }

    intervalId.value = window.setInterval(() => {
      asciiImage.value = randomizeAscii(asciiImage.value)
    }, 100) // Interval for animation
  }

  const loadImage = (imageUrl: string): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
      const image = new Image()
      image.crossOrigin = 'Anonymous' // To handle cross-origin images
      image.onload = () => {
        const [width, height] = clampDimensions(image.width, image.height)

        const canvas = document.createElement('canvas')
        canvas.width = width
        canvas.height = height
        const context = canvas.getContext('2d')
        if (!context) {
          reject(new Error('Failed to get canvas context'))
          return
        }

        context.drawImage(image, 0, 0, width, height)
        const grayScales = convertToGrayScales(context, width, height)

        asciiImage.value = drawAscii(grayScales, width)
        startAnimation() // Start animation after drawing ASCII
        resolve()
      }
      image.onerror = () => reject(new Error('Failed to load image'))
      image.src = imageUrl
    })
  }

  return {
    asciiImage,
    loadImage,
  }
}
