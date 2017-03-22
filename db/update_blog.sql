update blogs
set title = $2, contentA = $3, imageA = $4, descriptionA = $5, imageB = $6, descriptionB = $7, contentB = $8, imageC = $9, descriptionC = $10, imageD = $11, descriptionD = $12, contentC = $13, imageE = $14, descriptionE = $15, imageF = $16, descriptionF = $17
where id = $1
returning *