import React, { useRef } from 'react'
import styles from './styles.module.scss'
import { useEffect } from 'react'

const RainComponent = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const context = canvasRef.current.getContext('2d')
    let width = (canvasRef.current.width = window.innerWidth)
    let height = (canvasRef.current.height = window.innerHeight)

    const onResize = () => {
      width = canvasRef.current.width = window.innerWidth
      height = canvasRef.current.height = window.innerHeight
    }

    const colors = ['#857C39', '#8285E7']
    const symbols = [
      'React JS',
      'TypeScript',
      'Redux',
      'CSS',
      'HTML',
      'Three JS',
      'Github',
      'JavaScript',
      'Next JS',
      'Firestore',
      'SCSS',
    ]

    const objPack = []
    const gravity = 0.01

    function randomInt(min, max) {
      return Math.floor(min + Math.random() * (max - min + 1))
    }

    function objects(x, y) {
      this.x = x = randomInt(0, width)
      this.y = y = 0 //randomInt(0, width);

      this.w = 50
      this.h = 50

      this.a = randomInt(0, 0.1) // 1

      this.fontSize = 16
      this.fontWeight = '300'
      this.size = 18

      // this.vx = randomInt(-1, 1)
      this.vy = randomInt(-1, 8)
      this.color = colors[Math.floor(Math.random() * colors.length)]
      this.symbols = symbols[Math.floor(Math.random() * symbols.length)]
    }

    objects.prototype.draw = function () {
      context.globalAlpha = this.a
      context.save()
      context.font = '10 ' + this.fontSize + 'px Open Sans, sans-serif'
      context.fillText(this.symbols, this.x, this.y)
      context.restore()
      context.fillStyle = this.color
      // this.x += this.vx
      this.y += this.vy
      this.vy += gravity - 0.0000001
      // this.vx *= 0.99
      this.vy *= 0.99
      this.size -= 0.02

      this.a > 0 ? (this.a -= 0.003) : (this.a = 0)
    }

    function update() {
      context.clearRect(0, 0, width, height)
      // context.globalCompositeOperation = 'destination-over'

      objPack.push(new objects(10, 10))

      for (var i = 0; i < objPack.length; i++) {
        objPack[i].draw()

        if (objPack[i].size < 11) {
          objPack.splice(0, 1)
        }
      }

      requestAnimationFrame(update)
    }

    update()

    window.addEventListener('resize', onResize)
  })

  return <canvas className={styles.canvas} ref={canvasRef}></canvas>
}

export default RainComponent
