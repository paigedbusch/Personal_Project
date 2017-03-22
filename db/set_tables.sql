drop table if exists blogs, tours, users;

create table tours
(
  id serial primary key,
  title text,
  content text,
  gear text,
  price text,
  image text
);

insert into tours (title, content, gear, price, image) values
('title1', 'content1', 'gear1', 'price1', 'image1'),
('title2', 'content2', 'gear2', 'price2', 'image2'),
('title3', 'content3', 'gear3', 'price3', 'image3'),
('title4', 'content4', 'gear4', 'price4', 'image4'),
('title5', 'content5', 'gear5', 'price5', 'image5');

create table blogs
(
  id serial primary key,
  title text,
  contentA text,
  imageA text,
  descriptionA text,
  imageB text,
  descriptionB text,
  contentB text,
  imageC text,
  descriptionC text,
  imageD text,
  descriptionD text,
  contentC text,
  imageE text,
  descriptionE text,
  imageF text,
  descriptionF text
);

insert into blogs (title, contentA, imageA, descriptionA, imageB, descriptionB, contentB, imageC, descriptionC, imageD, descriptionD, contentC, imageE, descriptionE, imageF, descriptionF) values
('title1', 'contentA1', 'imageA1', 'descriptionA1', 'imageB1', 'descriptionB1', 'contentB1', 'imageC1', 'descriptionC1', 'imageD1', 'descriptionD1', 'contentC1', 'imageE1', 'descriptionE1', 'imageF1', 'descriptionF1'),
('title2', 'contentA2', 'imageA2', 'descriptionA2', 'imageB2', 'descriptionB2', 'contentB2', 'imageC2', 'descriptionC2', 'imageD2', 'descriptionD2', 'contentC2', 'imageE2', 'descriptionE2', 'imageF2', 'descriptionF2'),
('title3', 'contentA3', 'imageA3', 'descriptionA3', 'imageB3', 'descriptionB3', 'contentB3', 'imageC3', 'descriptionC3', 'imageD3', 'descriptionD3', 'contentC3', 'imageE3', 'descriptionE3', 'imageF3', 'descriptionF3'),
('title4', 'contentA4', 'imageA4', 'descriptionA4', 'imageB4', 'descriptionB4', 'contentB4', 'imageC4', 'descriptionC4', 'imageD4', 'descriptionD4', 'contentC4', 'imageE4', 'descriptionE4', 'imageF4', 'descriptionF4'),
('title5', 'contentA5', 'imageA5', 'descriptionA5', 'imageB5', 'descriptionB5', 'contentB5', 'imageC5', 'descriptionC5', 'imageD5', 'descriptionD5', 'contentC5', 'imageE5', 'descriptionE5', 'imageF5', 'descriptionF5');

create table users
(
  id serial primary key,
  username text,
  password text
);

insert into users (username, password) values
('admin', 'pass');