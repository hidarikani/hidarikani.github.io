# Zsh Tips

[Zsh](https://www.zsh.org/) Shell Tips
- `zsh` supports named directories
    - Open shell config: `nano ~/.zshrc`
    - Add named dir: `hash -d github=~/Documents/Github`, save and close
    - In a new shell window change to the named dir: `cd ~github`
- `zsh` config can be reload without opening a new window: `source ~/.zshrc`