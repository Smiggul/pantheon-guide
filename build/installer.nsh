; FRGE.GG installer customisation (electron-builder includes build/installer.nsh).
; FRGE_SHOWN_VERSION is the version as players read it (0.21.1.4, not 0.21.104).
; helpers/gen-installer-version.mjs writes version.nsh before every `npm run dist:win`.
!include "version.nsh"

!macro customHeader
  Caption "FRGE.GG ${FRGE_SHOWN_VERSION} Setup"
  BrandingText "FRGE.GG ${FRGE_SHOWN_VERSION}"
!macroend

; Always per-user, like the one-click installer before it: no "who is this for" page,
; no admin prompt, and the auto-updater can replace it without elevation.
!macro customInstallMode
  StrCpy $isForceCurrentInstall "1"
!macroend

; Welcome page on a fresh install. Updates run silently, and skip it anyway.
!macro customWelcomePage
  !insertmacro skipPageIfUpdated
  !define MUI_WELCOMEPAGE_TITLE "FRGE.GG ${FRGE_SHOWN_VERSION}"
  !define MUI_WELCOMEPAGE_TEXT "This installs FRGE.GG ${FRGE_SHOWN_VERSION}."
  !define MUI_PAGE_CUSTOMFUNCTION_SHOW frgeWelcomeShow
  !insertmacro MUI_PAGE_WELCOME

  Function frgeWelcomeShow
    GetDlgItem $0 $HWNDPARENT 1
    SendMessage $0 ${WM_SETTEXT} 0 "STR:Install"
  FunctionEnd

  ; Read by the finish page, which electron-builder adds after the install.
  !define MUI_FINISHPAGE_TITLE "FRGE.GG ${FRGE_SHOWN_VERSION} is installed"
!macroend
