pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/AnsNjm/ci-cd101'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t anassnajam/react-app:latest .'
            }
        }

        stage('Push Image') {
            steps {
                sh 'docker push anassnajam/react-app:latest'
            }
        }

        stage('Deploy with Ansible') {
            steps {
                sh 'ansible-playbook deploy.yml'
            }
        }
    }
}
