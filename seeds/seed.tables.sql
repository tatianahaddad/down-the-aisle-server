BEGIN;

TRUNCATE
  comments,
  articles,
  users
  RESTART IDENTITY CASCADE;

INSERT INTO users (user_name, full_name, password)
VALUES
  ('dunder', 'Dunder Mifflin', '$2a$12$HHngat6KTfkL1d650FuH7.PCNuO7RTPN8QPnibik8XJySGZgopBau'),
  ('b.deboop', 'Bodeep Deboop', '2a$12$uu7ZwBpkYn.AfkjOvadxgePBnYLUvb3r0Xyi5LaPkHx8uWFRgDi9q'),
  ('c.bloggs', 'Charlie Bloggs', '$2a$12$jOCSorlt102ol./6ie8oGeM5oo0FR0l2LNNQmCZccqYWjS8kAGS5e'),
  ('s.smith', 'Sam Smith', '$2a$12$klTYDWTYHmQqDVcNaJD7Be8Ler2IraBcVw4bMdUEV2F/P22ZOcoUu'),
  ('lexlor', 'Alex Taylor', '$2a$12$0pUbwyg9WTeusc3/5/bdYOA0CbFzuNOd/cRgT6aGkXNSi4YGFhL4W'),
  ('wippy', 'Ping Won In', '$2a$12$vCJd4ufg0WXsHdk3vJnsz.R3NdK3ZpD.MeF7tRRhAN7HVLe.6auAa');


/*INSERT INTO comments (
  text,
  article_id,
  user_id
) VALUES
  (
    'This post is amazing',
    1,
    2
  ),
  (
    'Yeh I agree it''s amazing',
    1,
    3
  ),
  (
    'I would go so far as to say it''s double amazing',
    1,
    4
  ),
  (
    'A-mazing!',
    1,
    5
  ),
  (
    'That''s some interesting lorems you raise',
    2,
    6
  ),
  (
    'Yeh totally I''d never thought about lorems like that before',
    2,
    1
  ),
  (
    'So you''re saying consectetur adipisicing elit?',
    2,
    3
  ),
  (
    'Sixth? You mean sith?!!',
    4,
    6
  ),
  (
    'What do you call an evil procrastinator? Darth Later! Hahahahaha!',
    4,
    4
  ),
  (
    'Ten ten ten ten ten ten ten!',
    10,
    3
  ),
  (
    'Iste, architecto obcaecati tenetur quidem voluptatum ipsa quam!!!',
    10,
    5
  ),
  (
    '5, 6, 7, 8! My boot-scootin'' baby is drivin'' me crazy...!',
    7,
    1
  ),
  (
    'My obsession from a western! My dance floor date',
    7,
    2
  ),
  (
    'My rodeo Romeo. A cowboy god from head to toe',
    7,
    3
  ),
  (
    'Wanna make you mine. Better get in line. 5, 6, 7, 8!',
    7,
    4
  ),
  (
    'Just a lonely comment',
    9,
    6
  ),
  (
    'Really? Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris??!',
    6,
    5
  ),
  (
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris for sure!!',
    6,
    1
  ),
  (
    'WOAH!!!!!',
    8,
    2
  ),
  (
    '°º¤ø,¸¸,ø¤º°`°º¤ø,¸,ø¤°º¤ø,¸¸,ø¤º°`°º¤ø,¸',
    8,
    4
  );*/

COMMIT;
