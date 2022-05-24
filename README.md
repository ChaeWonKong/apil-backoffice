# apil-backoffice

![nestjs](https://img.shields.io/badge/framework-nestjs-brightgreen)
![expressjs](https://img.shields.io/badge/framework-express-yellowgreen)
![db](https://img.shields.io/badge/db-mysql-orange)
![orm](https://img.shields.io/badge/orm-typeorm-red)
![lang](https://img.shields.io/badge/lang-typescript-blue)

공익법 센터 어필에서 이주노동자 및 난민 신청을 돕는 백오피스입니다.

|   part    |   required stacks    |
| :-------: | :------------------: |
| Framework |       Nest.js        |
|   Base    | Express.js / Node.js |
| Language  |      TypeScript      |
|    DB     |        MySQL         |
|    ORM    |       TypeORM        |

## Install

```shell
$ yarn
```

## Run

```shell
$ yarn start:dev
```

## Deployment

도커와 도커 컴포즈를 이용해 EC2로 배포합니다.
| Dockerhub Repository |
| :------------------: |
| [chaewonkong/apil](https://hub.docker.com/repository/docker/chaewonkong/apil) |

## Architecture

Client(React / Next.js) - Load Balancer - EC2 - RDS(MySQL)
