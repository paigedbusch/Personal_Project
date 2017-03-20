update tours
set title = $2, content = $3, gear = $4, price = $5, image = $6
where id = $1
returning *