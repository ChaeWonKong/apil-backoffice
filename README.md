# apil-backoffice

공익법 센터 어필에서 이주노동자 및 난민 신청을 돕는 백오피스입니다.

|   part    |   required stacks    |
| :-------: | :------------------: |
| Framework |       Nest.js        |
|   Base    | Express.js / Node.js |
| language  |      TypeScript      |
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
| chaewonkong/apil |

## Architecture

Client(React / Next.js) - Load Balancer - EC2 - RDS(MySQL)
