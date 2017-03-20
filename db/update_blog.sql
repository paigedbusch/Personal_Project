update blogs
set title = $2, content = $3, image = $4
where id = $1
returning *