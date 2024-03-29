# MacOS Web Dev Tips

- To display function keys in the Touch Bar when VSCode is in focus:
    System Preferences :arrow_right: Keyboard :arrow_right: Shortcuts :arrow_right: Function Keys :arrow_right: Click the Plus Sign :arrow_right: select Visual Studio Code
- Reset command line tools after OS update `sudo xcode-select --reset`. If reset doesn't work try [reinstalling](https://medium.com/flawless-app-stories/gyp-no-xcode-or-clt-version-detected-macos-catalina-anansewaa-38b536389e8d). 
- [Configure SSH Key](https://docs.github.com/en/enterprise-server@3.1/github/authenticating-to-github/connecting-to-github-with-ssh/checking-for-existing-ssh-keys) for installing npm packages from GitHub repository. The [Adding your SSH key to the ssh-agent](https://docs.github.com/en/enterprise-server@3.1/github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent) step is required because `npm` and `yarn` do not support passphrase prompt during package installation. This is usually required for legacy projects. When setting up a new project use https protocol instead.
- Open Rosetta terminal `arch -x86_64 zsh`
- Emulate Docker image that is not available for ARM64 `--platform linux/amd64`
- `nvm alias default node` to use the latest version of Node installed on your computer
- List used ports `lsof -PiTCP -sTCP:LISTEN`
- Edit hosts file `sudo nano /etc/hosts` Works well for preventing mindless scrolling of social media :)
- Show/hide files that begin with a dot `CMD + SHIFT + .`
