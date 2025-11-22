pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t anassnajam/react-app:latest .'
            }
        }

        stage('Push Image') {
            steps {
                // Use Jenkins credentials for Docker Hub
                withCredentials([usernamePassword(credentialsId: 'docker-hub', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh '''
                        # Log in to Docker Hub
                        echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin

                        # Push the Docker image
                        docker push anassnajam/react-app:latest
                    '''
                }
            }
        }

        stage('Check Kubectl & Paths') {
            steps {
                sh 'ls -R'
                sh 'kubectl version --client'
                sh 'kubectl apply -f k8s/deployment.yaml --dry-run=client'
            }
        }


        stage('Deploy with Ansible') {
            steps {
                sh 'ansible-playbook ansible/deploy.yml'
            }
        }
    }
}
