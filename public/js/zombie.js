import {
  incrementCustomProperty,
  setCustomProperty,
  getCustomProperty,
} from "./updateCustomProperty.js"

const zombieElem = document.querySelector("[data-zombie]")
const JUMP_SPEED = 0.45
const GRAVITY = 0.0015
const ZOMBIE_FRAME_COUNT = 2
const FRAME_TIME = 100

let isJumping
let zombieFrame
let currentFrameTime
let yVelocity
export function setupZombie() {
  isJumping = false
  zombieFrame = 0
  currentFrameTime = 0
  yVelocity = 0
  setCustomProperty(zombieElem, "--bottom", 0)
  document.removeEventListener("keydown", onJump)
  document.addEventListener("keydown", onJump)
}

export function updateZombie(delta, speedScale) {
  handleRun(delta, speedScale)
  handleJump(delta)
}

export function getZombieRect() {
  return zombieElem.getBoundingClientRect()
}

export function setZombieLose() {
  zombieElem.src = "imgs/zombie-lose.png"
}

function handleRun(delta, speedScale) {
  if (isJumping) {
    zombieElem.src = `imgs/zombie-stationary.png`
    return
  }

  if (currentFrameTime >= FRAME_TIME) {
    zombieFrame = (zombieFrame + 1) % ZOMBIE_FRAME_COUNT
    zombieElem.src = `imgs/zombie-run-${zombieFrame}.png`
    currentFrameTime -= FRAME_TIME
  }
  currentFrameTime += delta * speedScale
}

function handleJump(delta) {
  if (!isJumping) return

  incrementCustomProperty(zombieElem, "--bottom", yVelocity * delta)

  if (getCustomProperty(zombieElem, "--bottom") <= 0) {
    setCustomProperty(zombieElem, "--bottom", 0)
    isJumping = false
  }

  yVelocity -= GRAVITY * delta
}

function onJump(e) {
  if (e.code !== "Space" || isJumping) return

  yVelocity = JUMP_SPEED
  isJumping = true
}
