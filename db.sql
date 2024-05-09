Create DATABASE gcrecords;

use gcrecords;

CREATE TABLE tb_artista (
    id Int PRIMARY KEY auto_increment,
    nome Varchar(40),
    descBibliografia Varchar(2000),
    linkInstagram Varchar(70),
    linkTiktok Varchar(70),
    linkTwitter Varchar(70),
    linkYoutube Varchar(70),
    linkSpotify Varchar(70),
    imgCapa Varchar(200),
    imgSelfie Varchar(200),
    UNIQUE (linkInstagram, linkTiktok, linkTwitter, linkYoutube, linkSpotify)
);

CREATE TABLE tb_album (
    id Int PRIMARY KEY auto_increment,
    nome Varchar(60),
    ano Int,
    linkSpotify Varchar(100) UNIQUE,
    imgCapa Varchar(200),
    fk_idArtista Int
);

CREATE TABLE tb_show (
    id Int PRIMARY KEY auto_increment,
    nome Varchar(60),
    descEndereco Varchar(100),
    dataShow Date,
    blFestival Bit,
    blFinalizado Bit,
    fk_idArtista Int
);

CREATE TABLE tb_login (
    id Int PRIMARY KEY auto_increment,
    nomeUsuario Varchar(70),
    senha Varchar(70)
);
 
ALTER TABLE tb_album ADD CONSTRAINT fk_tb_album_2
    FOREIGN KEY (fk_idArtista)
    REFERENCES tb_artista (id)
    ON DELETE CASCADE;
 
ALTER TABLE tb_show ADD CONSTRAINT fk_tb_show_2
    FOREIGN KEY (fk_idArtista)
    REFERENCES tb_artista (id)
    ON DELETE CASCADE;

insert into tb_login (nomeUsuario, senha) 
                        values ("login", "1234");
                
select * from tb_login;