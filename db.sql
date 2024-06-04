Create DATABASE gcrecords;

use gcrecords;

CREATE TABLE tb_artista (
    id_artista Int PRIMARY KEY auto_increment,
    nm_artista Varchar(40),
    descBiografia Varchar(2000),
    linkInstagram Varchar(70),
    linkTiktok Varchar(70),
    linkTwitter Varchar(70),
    linkYoutube Varchar(70),
    linkSpotify Varchar(70),
    imgCapa varchar(200),
    imgSelfie varchar(200)
);

CREATE TABLE tb_album (
    id_album INT PRIMARY KEY AUTO_INCREMENT,
    nm_album VARCHAR(60),
    dataLancamento DATE,
    linkSpotify VARCHAR(100) UNIQUE,
    imgCapa VARCHAR(200),
    fk_idArtista INT
);

CREATE TABLE tb_show (
    id_show Int PRIMARY KEY auto_increment,
    nm_show Varchar(60),
    descEndereco Varchar(100),
    dataShow Datetime,
    blFestival Boolean,
    fk_idArtista Int
);

CREATE TABLE tb_login (
    id Int PRIMARY KEY auto_increment,
    nomeUsuario Varchar(70),
    senha Varchar(70),
    tipo Varchar(20)
);
 
ALTER TABLE tb_album ADD CONSTRAINT fk_tb_album_2
    FOREIGN KEY (fk_idArtista)
    REFERENCES tb_artista (id_artista)
    ON DELETE CASCADE;
 
ALTER TABLE tb_show ADD CONSTRAINT fk_tb_show_2
    FOREIGN KEY (fk_idArtista)
    REFERENCES tb_artista (id_artista)
    ON DELETE CASCADE;

/*Tabela Login - Inserções*/                
insert into tb_login (nomeUsuario, senha, tipo) 
				values ("Admin", "1234", "Admin");
                

/*Tabela Artista - Inserções*/                

INSERT INTO tb_artista (nm_artista, descBiografia, linkInstagram, linkTiktok, linkTwitter, linkYoutube, linkSpotify, imgCapa, imgSelfie) 
VALUES ('The Beatles', 'The Beatles foi uma banda de rock britânica, formada em Liverpool em 1960. Ao longo da sua carreira, o grupo passou por diversas formações, até seu fim em 1970. Sua formação mais conhecida incluía John Lennon, Paul McCartney, George Harrison e Ringo Starr.', 'https://www.instagram.com/thebeatles/', 'https://www.tiktok.com/@thebeatles', 'https://twitter.com/thebeatles', 'https://www.youtube.com/user/thebeatles', 'https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2', 'storage\artista\6c6decbf71a242c8d02c46a782479198', 'storage\\artista\\839167b29ca5a8829bf42c2e4a7d9887');

INSERT INTO tb_artista (nm_artista, descBiografia, linkInstagram, linkTiktok, linkTwitter, linkYoutube, linkSpotify, imgCapa, imgSelfie) 
VALUES ('Pink Floyd', 'Pink Floyd foi uma banda britânica de rock progressivo que fez sucesso em nível mundial. Conhecidos por suas composições de rock, letras filosóficas, experimentações musicais e elaborados shows ao vivo, eles são um dos grupos mais comerciais e influentes da história da música popular.', 'https://www.instagram.com/pinkfloyd/', 'https://www.tiktok.com/@pinkfloyd', 'https://twitter.com/pinkfloyd', 'https://www.youtube.com/user/pinkfloyd', 'https://open.spotify.com/artist/0k17h0D3J5VfsdmQ1iZtE9', 'storage\artista\6c6decbf71a242c8d02c46a782479198', 'storage\\artista\\839167b29ca5a8829bf42c2e4a7d9887');

INSERT INTO tb_artista (nm_artista, descBiografia, linkInstagram, linkTiktok, linkTwitter, linkYoutube, linkSpotify, imgCapa, imgSelfie) 
VALUES ('Michael Jackson', 'Michael Jackson foi um cantor, compositor, dançarino, produtor, empresário, arranjador vocal e filantropo estadunidense.', 'https://www.instagram.com/michaeljackson/', 'https://www.tiktok.com/@michaeljackson', 'https://twitter.com/michaeljackson', 'https://www.youtube.com/user/michaeljackson', 'https://open.spotify.com/artist/3fMbdgg4jU18AjLCKBhRSm', 'storage\artista\6c6decbf71a242c8d02c46a782479198', 'storage\\artista\\839167b29ca5a8829bf42c2e4a7d9887');

INSERT INTO tb_artista (nm_artista, descBiografia, linkInstagram, linkTiktok, linkTwitter, linkYoutube, linkSpotify, imgCapa, imgSelfie) 
VALUES ('Queen', 'Queen é uma banda britânica de rock, fundada em 1970 e liderada pelo vocalista Freddie Mercury, que morreu em 1991, e pelo guitarrista Brian May, ao lado do baterista Roger Taylor e do baixista John Deacon.', 'https://www.instagram.com/officialqueenmusic/', 'https://www.tiktok.com/@officialqueenmusic', 'https://twitter.com/QueenWillRock', 'https://www.youtube.com/user/queenofficial', 'https://open.spotify.com/artist/1dfeR4HaWDbWqFHLkxsg1d', 'storage\artista\6c6decbf71a242c8d02c46a782479198', 'storage\\artista\\839167b29ca5a8829bf42c2e4a7d9887');

INSERT INTO tb_artista (nm_artista, descBiografia, linkInstagram, linkTiktok, linkTwitter, linkYoutube, linkSpotify, imgCapa, imgSelfie) 
VALUES ('Led Zeppelin', 'Led Zeppelin foi uma banda britânica de rock formada em Londres, em 1968. A banda consistia no guitarrista Jimmy Page, o vocalista Robert Plant, o baixista e tecladista John Paul Jones e o baterista John Bonham.', 'https://www.instagram.com/ledzeppelin/', 'https://www.tiktok.com/@ledzeppelin', 'https://twitter.com/ledzeppelin', 'https://www.youtube.com/user/ledzeppelin', 'https://open.spotify.com/artist/36QJpDe2go2KgaRleHCDTp', 'storage\artista\6c6decbf71a242c8d02c46a782479198', 'storage\\artista\\839167b29ca5a8829bf42c2e4a7d9887');

INSERT INTO tb_artista (nm_artista, descBiografia, linkInstagram, linkTiktok, linkTwitter, linkYoutube, linkSpotify, imgCapa, imgSelfie) 
VALUES ('Elvis Presley', 'Elvis Aaron Presley foi um cantor, músico e ator norte-americano, mundialmente denominado como o Rei do Rock e com a alcunha de "Elvis, The Pelvis", pela forma extravagante, mas ousada como dançava e se movimentava, à época.', 'https://www.instagram.com/elvis/', 'https://www.tiktok.com/@elvispresley', 'https://twitter.com/elvispresley', 'https://www.youtube.com/user/elvis', 'https://open.spotify.com/artist/4345554sadasdasdas', 'storage\artista\6c6decbf71a242c8d02c46a782479198', 'storage\\artista\\839167b29ca5a8829bf42c2e4a7d9887');

INSERT INTO tb_artista (nm_artista, descBiografia, linkInstagram, linkTiktok, linkTwitter, linkYoutube, linkSpotify, imgCapa, imgSelfie) 
VALUES ('David Bowie', 'David Robert Jones, mais conhecido pelo seu nome artístico David Bowie, foi um cantor, compositor, ator e produtor musical britânico. Figura importante da música popular por mais de cinco décadas, Bowie é amplamente considerado um inovador, particularmente por seu trabalho na década de 1970.', 'https://www.instagram.com/davidbowie/', 'https://www.tiktok.com/@davidbowie', 'https://twitter.com/DavidBowieReal', 'https://www.youtube.com/user/davidbowie', 'https://open.spotify.com/artist/0oSGxfWSnnOXhD2fKuz2Gy', 'storage\artista\6c6decbf71a242c8d02c46a782479198', 'storage\\artista\\839167b29ca5a8829bf42c2e4a7d9887');

INSERT INTO tb_artista (nm_artista, descBiografia, linkInstagram, linkTiktok, linkTwitter, linkYoutube, linkSpotify, imgCapa, imgSelfie) 
VALUES ('The Rolling Stones', 'The Rolling Stones é uma banda de rock britânica formada em 25 de maio de 1962 e que fez parte da chamada British Invasion nos anos 1960. É uma das bandas mais antigas ainda em atividade, com quase 60 anos de carreira.', 'https://www.instagram.com/therollingstones/', 'https://www.tiktok.com/@therollingstones', 'https://twitter.com/RollingStones', 'https://www.youtube.com/user/therollingstones', 'https://open.spotify.com/artist/22bE4uQ6baNwSHPVcDxLCe', 'storage\artista\6c6decbf71a242c8d02c46a782479198', 'storage\\artista\\839167b29ca5a8829bf42c2e4a7d9887');

INSERT INTO tb_artista (nm_artista, descBiografia, linkInstagram, linkTiktok, linkTwitter, linkYoutube, linkSpotify, imgCapa, imgSelfie) 
VALUES ('AC/DC', 'AC/DC é uma banda australiana de rock formada em Sydney, Austrália em 1973, pelos irmãos Angus e Malcolm Young, que permaneceram nas formações iniciais da banda até Malcolm ser diagnosticado e aposentado devido a demência em 2014, e sua morte em 2017.', 'https://www.instagram.com/acdc/', 'https://www.tiktok.com/@acdc', 'https://twitter.com/acdc', 'https://www.youtube.com/user/acdc', 'https://open.spotify.com/artist/711MCceyCBcFnzjGY4Q7Un', 'storage\artista\6c6decbf71a242c8d02c46a782479198', 'storage\\artista\\839167b29ca5a8829bf42c2e4a7d9887');

INSERT INTO tb_artista (nm_artista, descBiografia, linkInstagram, linkTiktok, linkTwitter, linkYoutube, linkSpotify, imgCapa, imgSelfie) 
VALUES ('Nirvana', 'Nirvana foi uma banda norte-americana de rock formada pelo vocalista e guitarrista Kurt Cobain e pelo baixista Krist Novoselic em Aberdeen no ano de 1987, que teve grande sucesso como parte da cena grunge de Seattle.', 'https://www.instagram.com/nirvana/', 'https://www.tiktok.com/@nirvana', 'https://twitter.com/Nirvana', 'https://www.youtube.com/user/Nirvana', 'https://open.spotify.com/artist/6olE6TJLqED3rqDCT0FyPh', 'storage//artista//6c6decbf71a242c8d02c46a782479198', 'storage\\artista\\839167b29ca5a8829bf42c2e4a7d9887');


/*Tabela Shows - Inserções*/
INSERT INTO tb_show (nm_show, descEndereco, dataShow, blFestival, fk_idArtista) 
VALUES ('Lollapalooza', 'Grant Park, Chicago, IL', '2024-08-01', true, 9);

INSERT INTO tb_show (nm_show, descEndereco, dataShow, blFestival, fk_idArtista) 
VALUES ('Coachella', 'Empire Polo Club, Indio, CA', '2024-04-12', true,  10);

INSERT INTO tb_show (nm_show, descEndereco, dataShow, blFestival, fk_idArtista) 
VALUES ('Rock in Rio', 'Parque Olímpico, Rio de Janeiro, Brazil', '2024-09-27', true, 9);

INSERT INTO tb_show (nm_show, descEndereco, dataShow, blFestival, fk_idArtista) 
VALUES ('Glastonbury', 'Worthy Farm, Pilton, UK', '2024-06-26', true, 10);

INSERT INTO tb_show (nm_show, descEndereco, dataShow, blFestival, fk_idArtista) 
VALUES ('Summerfest', 'Henry Maier Festival Park, Milwaukee, WI', '2024-07-03', true, 9);

INSERT INTO tb_show (nm_show, descEndereco, dataShow, blFestival, fk_idArtista) 
VALUES ('Bonnaroo', 'Great Stage Park, Manchester, TN', '2025-06-13', true, 9);


/*Tabela Album - Inserções*/

-- Álbuns do artista 1
INSERT INTO tb_album (nm_album, dataLancamento, linkSpotify, imgCapa, fk_idArtista) 
VALUES ('A Night at the Opera', '1975-11-21', 'https://open.spotify.com/album/5Q8owF2MLyJXpTiI4jyv7e', '', 1);

INSERT INTO tb_album (nm_album, dataLancamento, linkSpotify, imgCapa, fk_idArtista) 
VALUES ('News of the World', '1977-10-28', 'https://open.spotify.com/album/5Ld4D1HqBoserSf0Y0E6mB', '', 1);

-- Álbuns do artista 2
INSERT INTO tb_album (nm_album, dataLancamento, linkSpotify, imgCapa, fk_idArtista) 
VALUES ('The Beatles (White Album)', '1968-11-22', 'https://open.spotify.com/album/7vEJAtP3KgKSpOHVgwm3Eh', '', 2);

INSERT INTO tb_album (nm_album, dataLancamento, linkSpotify, imgCapa, fk_idArtista) 
VALUES ('Sgt. Pepper''s Lonely Hearts Club Band', '1967-05-26', 'https://open.spotify.com/album/0ETFjACtuP2ADo6LFhL6HN', '', 2);

-- Álbuns do artista 3
INSERT INTO tb_album (nm_album, dataLancamento, linkSpotify, imgCapa, fk_idArtista) 
VALUES ('Back in Black', '1980-07-25', 'https://open.spotify.com/album/6mUdeDZCsExyJLMdAfDuwh', '', 3);

INSERT INTO tb_album (nm_album, dataLancamento, linkSpotify, imgCapa, fk_idArtista) 
VALUES ('Highway to Hell', '1979-07-27', 'https://open.spotify.com/album/5vdp5UmvTsnMEMESIF2Ym6', '', 3);

-- Álbuns do artista 4
INSERT INTO tb_album (nm_album, dataLancamento, linkSpotify, imgCapa, fk_idArtista) 
VALUES ('Led Zeppelin IV', '1971-11-08', 'https://open.spotify.com/album/1p0t3JtUTayV2wb1RGN9mO', '', 4);

INSERT INTO tb_album (nm_album, dataLancamento, linkSpotify, imgCapa, fk_idArtista) 
VALUES ('Physical Graffiti', '1975-02-24', 'https://open.spotify.com/album/6YXmqBTTJXGJp2z6MH3nWK', '', 4);

-- Álbuns do artista 5
INSERT INTO tb_album (nm_album, dataLancamento, linkSpotify, imgCapa, fk_idArtista) 
VALUES ('The Wall', '1979-11-30', 'https://open.spotify.com/album/4LH4d3cOWNNsVw41Gqt2kv', '', 5);

INSERT INTO tb_album (nm_album, dataLancamento, linkSpotify, imgCapa, fk_idArtista) 
VALUES ('Dark Side of the Moon', '1973-03-01', 'https://open.spotify.com/album/asdasdasdadasdasdasdada', '', 5);

-- Álbuns do artista 6
INSERT INTO tb_album (nm_album, dataLancamento, linkSpotify, imgCapa, fk_idArtista) 
VALUES ('Hotel California', '1976-12-08', 'https://open.spotify.com/album/3eqjTLE0HfPfh78zjh6TqT', '', 6);

INSERT INTO tb_album (nm_album, dataLancamento, linkSpotify, imgCapa, fk_idArtista) 
VALUES ('Desperado', '1973-04-17', 'https://open.spotify.com/album/7tBYQsjLqCMz9vXvRj3PWL', '', 6);

-- Álbuns do artista 7
INSERT INTO tb_album (nm_album, dataLancamento, linkSpotify, imgCapa, fk_idArtista) 
VALUES ('Born to Run', '1975-08-25', 'https://open.spotify.com/album/1Ld5GT174A9gwt0bqLlCkZ', '', 7);

INSERT INTO tb_album (nm_album, dataLancamento, linkSpotify, imgCapa, fk_idArtista) 
VALUES ('vfsdfdvsdf', '1984-06-04', 'https://open.spotify.com/album/sdffsda', 'storage\\album\\447801c6931b8d45c261e35eba73a942', 9);


select id_artista               id, 
             nm_artista         nome, 
             descBiografia   	biografia, 
             linkInstagram      instagram,
             linkTiktok         tiktok,
             linkTwitter        twitter,
             linkYoutube        youtube,
             linkSpotify        spotify,
             imgCapa            capa,
             imgSelfie          selfie
        from tb_artista;

select s.id_show       id,
        s.nm_show       nome,
        s.descEndereco  endereco,
        s.dataShow      data,
        s.blFestival    festival,
        s.fk_idArtista  artista, a.nm_artista nomeArtista, a.imgSelfie imagemArtista
        FROM tb_show s
        JOIN tb_artista a ON s.fk_idArtista = a.id_artista
        WHERE s.blFestival = true
        AND dataShow >= CURRENT_DATE
        order by dataShow;
        
        select id_show       id,
        nm_show       nome,
        descEndereco  endereco,
        dataShow      data,
        blFestival    festival,
        fk_idArtista  artista 
        FROM tb_show 
        where fk_idArtista = 9;
        
        select id_artista         id, 
            nm_artista          nome, 
            descBiografia       biografia, 
            linkInstagram       instagram,
            linkTiktok          tiktok,
            linkTwitter         twitter,
            linkYoutube         youtube,
            linkSpotify         spotify,
            imgCapa             capa,
            imgSelfie           selfie
        from tb_artista
       where id_artista = 8;
       
       
       SELECT *
FROM tb_show
WHERE fk_idArtista = 9 AND dataShow = '2024-09-27T00:00:00'