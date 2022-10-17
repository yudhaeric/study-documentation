### Commonly used syntax

- git init
- git status 
- git add file1.txt
- git add . | **add all file changes to staging area**
- git commit -m "Add file1.txt"
- git commit -am "Add file1.txt" | **if file status modified in staging area, we can commit directly**
- git branch | **See current branch**
- alias graph="git log --oneline --graph" | **Creating alias**

### Cancel new file and deleted file in working directory

- git clean -f | **all files**
- git restore file1.txt | **one by one**

### Cancel adding files in stagging area

- git restore --staged file1.txt

### When we don't want to track files in Git we can create file .ignore

- log/ | **ignore folder log**
- log.txt | **ignore file log**
- *.backup | **ignore file with extension .backup**