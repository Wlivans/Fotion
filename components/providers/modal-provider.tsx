"use client"

import * as React from "react"
import SettingsModal from "../modals/settings-modal"
import { useState, useEffect } from "react"
import { CoverImageModal } from "../modals/cover-image-modal"

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
      <CoverImageModal />
    </>
  )
}
