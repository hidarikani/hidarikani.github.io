# Tips For Web Developers Working on Macs with Apple silicone (M1)

- To display function keys in the Touch Bar when VSCode is in focus:
    System Preferences :arrow_right: Keyboard :arrow_right: Shortcuts :arrow_right: Function Keys :arrow_right: Click the Plus Sign :arrow_right: select Visual Studio Code
- Reset command line tools after OS update `sudo xcode-select --reset`. If reset doesn't work try [reinstalling](https://medium.com/flawless-app-stories/gyp-no-xcode-or-clt-version-detected-macos-catalina-anansewaa-38b536389e8d). 
- Open Rosetta terminal `arch -x86_64 zsh`
- [Configure SSH Key](https://docs.github.com/en/enterprise-server@3.1/github/authenticating-to-github/connecting-to-github-with-ssh/checking-for-existing-ssh-keys) for installing npm packages from GitHub repository. The [Adding your SSH key to the ssh-agent](https://docs.github.com/en/enterprise-server@3.1/github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent) step is required because `npm` and `yarn` do not support passphrase prompt during package installation. This is usually required for legacy projects. When setting up a new project use https protocol instead.
- `zsh` supports named directories
    - Open shell config: `nano ~/.zshrc`
    - Add named dir: `hash -d github=~/Documents/Github`, save and close
    - In a new shell window change to the named dir: `cd ~github`
- List used ports `lsof -PiTCP -sTCP:LISTEN`    
