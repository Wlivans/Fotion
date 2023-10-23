"use client"

import * as React from "react"
import SettingsModal from "../modal/settings-modal"
import { useState, useEffect } from "react"

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }
  return (
    <>
      <SettingsModal />
    </>
  )
}
