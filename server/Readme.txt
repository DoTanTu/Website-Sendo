Database để test

create database hkdn;
use hdkn;
create table user(
	id int primary key auto_increment,
    name varchar(255) null,
    email varchar(25) not null,
    password varchar(50) not null,
    is_Seller boolean default(0) not null,
    address varchar(255) null,
    phoneNumber varchar(15) null,
    gender boolean null,
    birthday date null
);

*Note: nếu is_Seller == 0 , thì tài khoản này của buyer và không cho đăng nhập vào trang dashboard
