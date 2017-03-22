insert into blogs (title, contentA, imageA, descriptionA, imageB, descriptionB, contentB, imageC, descriptionC, imageD, descriptionD, contentC, imageE, descriptionE, imageF, descriptionF)
values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
returning *