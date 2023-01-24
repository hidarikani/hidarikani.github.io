# Shell Cheat Sheet
## Connecting to Remote
Basic `ssh` connection:
```
ssh user@example.com
```
To run commands that take a long time to complete, without the fear of disconnecting, first, start screen:
```
screen
```

Second, run your command. Third, "minimize" screen:

- CTR+A
- D

To disconnect:
```
exit
```
After reconnecting restore session:
```
screen -r
```
Quit screen when you no longer need it
- CTR+A
- \
- y

## File System

Print working directory
```
echo "$PWD"
```

Calculate folder sizes
```
du -sh ~/Documents/* | sort -h
```
...alternative with progress indicator
```
ncdu ~/Documents
```

Print folder tree
```
tree -d --filelimit 10 ~/Documents
```

## OS

Restart
```
systemctl reboot
```