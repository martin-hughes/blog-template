export {}

declare global {
  interface Window {
    updateDOM: () => void
  }
}
