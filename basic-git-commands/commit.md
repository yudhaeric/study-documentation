### See a snapshot commit

- git log
- git log --oneline | **Simple log**
- git log --oneline --graph | **Complex log**
- git show "hash" | **Detail commit log**

### Compare commit

- git diff "hash" HEAD | **Compare in terminal**
- git diff "hash" "hash"

- git difftool "hash" HEAD | **Compare in default text editor**
- git difftool "hash" "hash"

### View file in the previous commit

- git checkout "hash"
- git checkout master/main | **Back in latest commit**

#### NOTED!

- git checkout lebih sering di gunakan untuk pindah branch bukan melihat commit sebelum nya

### Amend Commit

- git commit --amend -m "message commit" 

#### NOTED!

- Berfungsi ketika ingin merubah commit / mengganti nama commit sebelum nya tanpa reset commit
- Ketika ada baris pada file yang lupa di tambahkan kita bisa amend commit

### Reset commit

- git reset --soft "hash" | **Changes are still in the staging area**
- git reset --mixed "hash" | **Changes are still in the working directory**
- git reset --hard "hash" | **All changes are gone**

#### NOTED!

- Setelah reset tetapi belum membuat commit baru, kita masih bisa mengembalikan commit yang sudah di reset
- Ketika commit sudah di push ke repo Github, commit tidak bisa di reset, commit hanya bisa di reset pada Git di local