pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/yourusername/yourapp.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t yourusername/demo-app:latest .'
            }
        }

        stage('Push Image') {
            steps {
                sh 'docker push yourusername/demo-app:latest'
            }
        }

        stage('Deploy with Ansible') {
            steps {
                sh 'ansible-playbook deploy.yml'
            }
        }
    }
}
