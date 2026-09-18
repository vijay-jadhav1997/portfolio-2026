// import nodejs from '../assets/skills-icons/NodeJS-Dark.svg'
import nodejs from '../assets/skills-icons/nodejs1.svg'
import express from '../assets/skills-icons/ExpressJS-Light.svg'
import mongodb from '../assets/skills-icons/MongoDB.svg'
import postgresql from '../assets/skills-icons/postgresql.svg'
import redis from '../assets/skills-icons/Redis-Light.svg'
import mongoose from '../assets/skills-icons/Mongoose.js.svg'
import graphQL from '../assets/skills-icons/GraphQL.svg'
import kafka from '../assets/skills-icons/Kafka.svg'
import rabbitmq from '../assets/skills-icons/RabbitMQ-Light.svg'
import socket from '../assets/skills-icons/socket-io.svg'
import swagger from '../assets/skills-icons/Swagger.svg'
import zod from '../assets/skills-icons/zod.svg'

import aws from '../assets/skills-icons/AWS-Light.svg'
import docker from '../assets/skills-icons/Docker.svg'
import Kubernetes from '../assets/skills-icons/Kubernetes.svg'
import cicd from '../assets/skills-icons/cicd1.svg'
import microservice from '../assets/skills-icons/microservice.svg'
import githubActions from '../assets/skills-icons/GitHub-Actions.svg'

import zustand from '../assets/skills-icons/zustand.svg'
import javascript from '../assets/skills-icons/JavaScript.svg'
import typescript from '../assets/skills-icons/TypeScript.svg'
import nextjs from '../assets/skills-icons/NextJS-Light.svg'
import reactjs from '../assets/skills-icons/React-Light.svg'
import tailwindcss from '../assets/skills-icons/TailwindCSS-Light.svg'
import redux from '../assets/skills-icons/Redux.svg'
import html from '../assets/skills-icons/HTML.svg'
import css from '../assets/skills-icons/CSS.svg'
import antDesign from '../assets/skills-icons/ant-design.svg'
import shadcn from '../assets/skills-icons/shadcn.svg'

import git from '../assets/skills-icons/Git.svg'
import postman from '../assets/skills-icons/Postman2.svg'
import jira from '../assets/skills-icons/jira-blue.svg'
import github from '../assets/skills-icons/Github-Dark.svg'
import npm from '../assets/skills-icons/Npm-Dark.svg'
// import babel from '../assets/skills-icons/Babel.svg'
import vite from '../assets/skills-icons/Vite-Light.svg'
import vscode from '../assets/skills-icons/VSCode-Dark.svg'
import antigravity from '../assets/skills-icons/antigravity.svg'
import claude from '../assets/skills-icons/claude.svg'
import cursor from '../assets/skills-icons/cursor.svg'

interface TechInterface {
  name: string
  img: string
}

interface MySpecializationInterface {
  name: string
  img: string
  score: number
}

interface MyExpertiseInterface {
  name: string
  score: number
}


export const backendTechs: TechInterface[] = [
  {
    name: 'Node.js',
    img: nodejs
  },
  {
    name: 'Express.js',
    img: express
  },
  {
    name: 'PostgreSQL',
    img: postgresql
  },
  {
    name: 'MongoDB',
    img: mongodb
  },
  {
    name: 'Redis',
    img: redis
  },
  {
    name: 'Mongoose',
    img: mongoose
  },
  {
    name: 'GraphQL',
    img: graphQL
  },
  {
    name: 'Socket.io',
    img: socket
  },
  {
    name: 'Kafka',
    img: kafka
  },
  {
    name: 'RabbitMQ',
    img: rabbitmq
  },
  {
    name: 'Swagger',
    img: swagger
  },
  {
    name: 'Zod',
    img: zod
  },
]

export const cloudAndDevOps: TechInterface[] = [
  {
    name: 'AWS',
    img: aws
  },
  {
    name: 'Docker',
    img: docker
  },
  {
    name: 'Kubernetes',
    img: Kubernetes
  },
  {
    name: 'CI/CD',
    img: cicd
  },
  {
    name: 'Micro Services',
    img: microservice
  },
  {
    name: 'GitHub Actions',
    img: githubActions
  },
]

export const frontendTechs: TechInterface[] = [
  {
    name: 'JavaScript',
    img: javascript
  },
  {
    name: 'TypeScript',
    img: typescript
  },
  {
    name: 'Next.js',
    img: nextjs
  },
  {
    name: 'React.js',
    img: reactjs
  },
  {
    name: 'TailwindCSS',
    img: tailwindcss
  },
  {
    name: 'Redux',
    img: redux
  },
  {
    name: 'Zustand',
    img: zustand
  },
  {
    name: 'HTML',
    img: html
  },
  {
    name: 'CSS',
    img: css
  },
  {
    name: 'Ant Design',
    img: antDesign
  },
  {
    name: 'Shadcn',
    img: shadcn
  },
]

export const workflowAndTools: TechInterface[] = [
  {
    name: 'Git',
    img: git
  },
  {
    name: 'Postman',
    img: postman
  },
  {
    name: 'Jira',
    img: jira
  },
  {
    name: 'GitHub',
    img: github
  },
  {
    name: 'NPM',
    img: npm
  },
  {
    name: 'Vite',
    img: vite
  },
  {
    name: 'vs code',
    img: vscode
  },
  {
    name: 'Antigravity',
    img: antigravity
  },
  {
    name: 'Claude',
    img: claude
  },
  {
    name: 'Cursor',
    img: cursor
  },
]

export const myExpertise: MyExpertiseInterface[] = [
  {
    name: 'Frontend development',
    score: 90
  },
  {
    name: 'Backend development',
    score: 80
  },
  {
    name: 'Cloud & DevOps',
    score: 40
  },
  {
    name: 'Micro Services & Architecture',
    score: 60
  },
  {
    name: 'Dev tools',
    score: 75
  },
]

export const mySpecialization: MySpecializationInterface[] = [
  {
    img: nodejs,
    name: 'Node/Express',
    score: 90
  },
  {
    img: javascript,
    name: 'JavaScript',
    score: 90
  },
  {
    img: reactjs,
    name: 'React',
    score: 85
  },
  {
    img: nextjs,
    name: 'Next.js',
    score: 70
  },
  {
    img: postgresql,
    name: 'PostgreSQL',
    score: 85
  },
  {
    img: mongodb,
    name: 'MongoDB',
    score: 90
  },
  {
    img: aws,
    name: 'AWS',
    score: 60
  },
  {
    img: microservice,
    name: 'Micro Services',
    score: 60
  },
]