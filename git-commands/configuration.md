### Change username and password in Git

- git config --global user.name "yudhaeric"
- git config --global user.email "yudhaericpamungkas@gmail_com"

### Settings a default code editor and setting to see compare commit

- git config --global core.editor "code --wait" | **Setting default text editor**
- git config --global diff.tool "default-difftool" | **To compare commit in terminal**
- git config --global difftool.default-difftool.cmd "code --wait --diff \$LOCAL \$REMOTE" | **To compare commit in default text editor**

### See the configuration 

- git config --list --show-origin
