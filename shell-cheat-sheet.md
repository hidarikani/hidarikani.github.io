# Shell Cheat Sheet
## Getting Help
command manual 
```
man ls
```
Press `q` to exit. Press `/` to search.

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
View directory contents
```
ls -lAFG
```
- `-l` more info
- `-A` show hidden files, except `.` and `..`
- `-F` hint if item is dir, file, symlink, or something else
- `-G` add color


Create folder
```
mkdir -p ~/foo/bar
```
Without `-p` will complain `foo` doesn't exist.


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