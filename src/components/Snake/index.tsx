import React, { useState, useEffect, useRef } from 'react'
import { useInterval } from './useInterval'
import {
  canvas_size,
  apple_start,
  snake_start,
  direction_start,
} from './constants'
import styles from './styles.module.scss'

export interface ICoords {
  x: number
  y: number
}
interface IDirections {
  [key: string]: ICoords
}
const directions: IDirections = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 },
}

const App: React.FC = () => {
  const [snakeColor, setSnakeColor] = useState('black')
  const [snake, setSnake] = useState<Array<ICoords>>(snake_start)
  const [apple, setApple] = useState<ICoords>(apple_start)
  const [direction, setDirection] = useState<ICoords>(direction_start)
  const speed = 50
  const [canvasSize, setCanvasSize] = useState({
    x: 450,
    y: 340,
  })
  const [scale, setScale] = useState(17)
  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth

      if (newWidth <= 992) {
        setCanvasSize({ x: 400, y: 270 })
        setScale(15)
      }

      if (newWidth <= 768) {
        setCanvasSize({ x: 200, y: 150 })
        setScale(8)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const checkCollision = (piece: ICoords, snoko: ICoords[] = snake) => {
    // Wall Collision Detection
    if (
      piece.x * scale >= canvas_size.x ||
      piece.x < 0 ||
      piece.y * scale >= canvas_size.y ||
      piece.y < 0
    ) {
      return true
    }

    // Snake Collision Detection
    for (const segment of snoko) {
      if (piece.x === segment.x && piece.y === segment.y) return true
    }

    return false
  }

  const createRandomApple = () => {
    return {
      x: Math.floor(Math.random() * (canvas_size.x / scale)),
      y: Math.floor(Math.random() * (canvas_size.y / scale)),
    }
  }

  const checkAppleCollision = (newSnake: ICoords[]) => {
    if (newSnake[0].x === apple.x && newSnake[0].y === apple.y) {
      let newApple = createRandomApple()

      setApple(newApple)
      return true
    }
    return false
  }

  const gameLoop = () => {
    const snakeCopy = [...snake]
    const newSnakeHead: ICoords = {
      x: snakeCopy[0].x + direction.x,
      y: snakeCopy[0].y + direction.y,
    }
    snakeCopy.unshift(newSnakeHead)

    if (checkCollision(newSnakeHead)) {
      //endGame()
    } else {
      if (!checkAppleCollision(snakeCopy)) {
        snakeCopy.pop()
      }
      setSnake(snakeCopy)
    }
  }

  useInterval(() => gameLoop(), speed)

  useEffect(() => {
    const moveRandomDirection = () => {
      const randomIndex = Math.floor(
        Math.random() * Object.keys(directions).length,
      )
      const randomDirection = directions[Object.keys(directions)[randomIndex]]
      setDirection(randomDirection)
    }

    const intervalId = setInterval(moveRandomDirection, 100)

    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    const context = canvasRef.current?.getContext('2d')
    if (context == null) throw new Error('Could not get context')
    context.setTransform(scale, 0, 0, scale, 0, 0)
    context.clearRect(0, 0, canvasSize.x, canvasSize.y)

    // Draw Snake
    context.fillStyle = snakeColor

    snake.forEach(({ x, y }) => context.fillRect(x, y, 1, 1))

    // Draw Apple
    //  context.fillStyle = 'none'
    // context.fillRect(apple.x, apple.y, 1, 1)
  }, [snake, apple, canvasSize])

  const moveSnake = (event: React.KeyboardEvent) => {
    const { key } = event
    if (
      key === 'ArrowUp' ||
      key === 'ArrowDown' ||
      key === 'ArrowRight' ||
      key === 'ArrowLeft'
    ) {
      setDirection(directions[key])
    }
  }

  return (
    <div className={styles.wrapper}>
      <div
        ref={wrapperRef}
        className={styles.controls}
        role="button"
        tabIndex={0}
        onKeyDown={(event: React.KeyboardEvent) => moveSnake(event)}
      >
        <canvas ref={canvasRef} width={canvasSize.x} height={canvasSize.y} />
      </div>
    </div>
  )
}

export default App
