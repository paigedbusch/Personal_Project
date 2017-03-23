insert into tours (title, content, gear, price, image, tourtype)
values ($1, $2, $3, $4, $5, $6)
returning *