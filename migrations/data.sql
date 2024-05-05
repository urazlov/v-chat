--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2 (Debian 16.2-1.pgdg120+2)
-- Dumped by pg_dump version 16.2 (Debian 16.2-1.pgdg120+2)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: v-chat-user
--

INSERT INTO public."user" (id, email, password, name, login, "avatarSrc") VALUES (2, 'urazlov.v@gmail.com', '$2b$10$KqgNRVbQPvK/61JESW.LZuAPDjODhPKflRrZEX0RQb9vHbGfPsW1e', 'viktor', 'vindrix', NULL);
INSERT INTO public."user" (id, email, password, name, login, "avatarSrc") VALUES (3, 'admin@mail.com', '$2b$10$QB.W2jnpxQi.NssWV1cs/.2v0oDvfjU5XnXxRNM.ijExCuu7OZaI2', 'Admin', 'admin', NULL);
INSERT INTO public."user" (id, email, password, name, login, "avatarSrc") VALUES (6, 'root@r.com', '$2b$10$w9mkz9Il0HhLmWYC.K8V6O6ZxsTpeoOoOsbMhbyE17mRcJsUWdBEW', 'root', 'root', NULL);
INSERT INTO public."user" (id, email, password, name, login, "avatarSrc") VALUES (7, 'root@gmail.com', '$2b$10$Q.6aux89zoFBIjhPSIVks.d1BouIYdknwFZL7sFWr7nE.NVFY0za2', 'root', 'roott', NULL);
INSERT INTO public."user" (id, email, password, name, login, "avatarSrc") VALUES (8, 'adminn@n.com', '$2b$10$rQwXotqS6mbMzTSJOqNI..pFMycRWVcwDEZVfhc2m2ekO0d/xVMLe', 'adminn', 'adminn', NULL);
INSERT INTO public."user" (id, email, password, name, login, "avatarSrc") VALUES (9, 'cool@cool.com', '$2b$10$Okzepl0f.kBIi2pQm0NVJ.AGkfFIC4.M.AGDX3Lb8qnNcK2KZC4mq', 'Cool', 'coolguy', NULL);
INSERT INTO public."user" (id, email, password, name, login, "avatarSrc") VALUES (10, 'admin@gmail.com', '$2b$10$DSnbqJaRrbS7bNkxAVQTQel0tGq04xTBeF5dki5.XsvCzuloa42Yu', 'admin', 'adminnn', NULL);
INSERT INTO public."user" (id, email, password, name, login, "avatarSrc") VALUES (11, 'admin@1.com', '$2b$10$iRdlzpvkum8W9HjAxPzCJugVgbsnYvlSv/z0sh6hUFwgVo7wW.anK', 'admin', 'admin1', NULL);
INSERT INTO public."user" (id, email, password, name, login, "avatarSrc") VALUES (12, 'admin@gmail.com', '$2b$10$kty6Ft.lcLmUzs7Yv3azZe6U9xwQV/2coLYkCp8BfLOxL473rVbg6', 'Vasya', 'vasya', NULL);


--
-- Data for Name: message; Type: TABLE DATA; Schema: public; Owner: v-chat-user
--

INSERT INTO public.message (id, content, "timestamp", "receiverId", "senderId") VALUES (2, 'blablabla', '2024-05-05 17:10:57.764', 3, 2);
INSERT INTO public.message (id, content, "timestamp", "receiverId", "senderId") VALUES (21, '213', '2024-05-05 17:50:39.711', 3, 2);
INSERT INTO public.message (id, content, "timestamp", "receiverId", "senderId") VALUES (22, '123232', '2024-05-05 17:50:43.711', 3, 2);
INSERT INTO public.message (id, content, "timestamp", "receiverId", "senderId") VALUES (23, '12321312', '2024-05-05 17:51:35.261', 3, 2);
INSERT INTO public.message (id, content, "timestamp", "receiverId", "senderId") VALUES (24, '11111', '2024-05-05 17:53:55.709', 3, 2);
INSERT INTO public.message (id, content, "timestamp", "receiverId", "senderId") VALUES (25, '11111', '2024-05-05 17:55:49.584', 3, 2);
INSERT INTO public.message (id, content, "timestamp", "receiverId", "senderId") VALUES (26, 'привет ', '2024-05-05 17:56:26.808', 3, 2);
INSERT INTO public.message (id, content, "timestamp", "receiverId", "senderId") VALUES (27, '24241242', '2024-05-05 17:57:23.604', 3, 2);
INSERT INTO public.message (id, content, "timestamp", "receiverId", "senderId") VALUES (28, '123123', '2024-05-05 17:58:32.001', 3, 2);
INSERT INTO public.message (id, content, "timestamp", "receiverId", "senderId") VALUES (29, 'привет чувак
', '2024-05-05 18:01:22.344', 3, 2);
INSERT INTO public.message (id, content, "timestamp", "receiverId", "senderId") VALUES (30, 'я дебил', '2024-05-05 18:03:49.455', 3, 2);
INSERT INTO public.message (id, content, "timestamp", "receiverId", "senderId") VALUES (31, 'привет ', '2024-05-05 18:04:54.506', 3, 2);
INSERT INTO public.message (id, content, "timestamp", "receiverId", "senderId") VALUES (32, 'привет ', '2024-05-05 18:05:04.132', 3, 2);
INSERT INTO public.message (id, content, "timestamp", "receiverId", "senderId") VALUES (33, 'ну ты канеш ваще крутой челик', '2024-05-05 18:05:13.558', 3, 2);
INSERT INTO public.message (id, content, "timestamp", "receiverId", "senderId") VALUES (34, 'А вот и мой чат епта

', '2024-05-05 18:07:14.388', 3, 2);
INSERT INTO public.message (id, content, "timestamp", "receiverId", "senderId") VALUES (35, 'Да', '2024-05-05 18:16:21.117', 3, 2);
INSERT INTO public.message (id, content, "timestamp", "receiverId", "senderId") VALUES (36, 'пизда канеш какая то ', '2024-05-05 18:51:47.862', 3, 2);
INSERT INTO public.message (id, content, "timestamp", "receiverId", "senderId") VALUES (37, 'привет 
', '2024-05-05 19:01:06.973', 3, 2);
INSERT INTO public.message (id, content, "timestamp", "receiverId", "senderId") VALUES (38, 'привет ', '2024-05-05 19:01:37.037', 2, 3);
INSERT INTO public.message (id, content, "timestamp", "receiverId", "senderId") VALUES (39, 'как дела?', '2024-05-05 19:03:47.502', 3, 2);
INSERT INTO public.message (id, content, "timestamp", "receiverId", "senderId") VALUES (40, 'алло ты тут', '2024-05-05 19:08:03.898', 3, 2);
INSERT INTO public.message (id, content, "timestamp", "receiverId", "senderId") VALUES (41, 'да тут, все норм ', '2024-05-05 19:08:18.451', 2, 3);
INSERT INTO public.message (id, content, "timestamp", "receiverId", "senderId") VALUES (42, 'ну кайф ', '2024-05-05 19:12:11.023', 3, 2);
INSERT INTO public.message (id, content, "timestamp", "receiverId", "senderId") VALUES (43, 'а у тя как ?', '2024-05-05 19:12:22.974', 2, 3);
INSERT INTO public.message (id, content, "timestamp", "receiverId", "senderId") VALUES (44, 'да тож пойдет ', '2024-05-05 19:12:31.6', 3, 2);


--
-- Name: message_id_seq; Type: SEQUENCE SET; Schema: public; Owner: v-chat-user
--

SELECT pg_catalog.setval('public.message_id_seq', 44, true);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: v-chat-user
--

SELECT pg_catalog.setval('public.user_id_seq', 12, true);


--
-- PostgreSQL database dump complete
--

