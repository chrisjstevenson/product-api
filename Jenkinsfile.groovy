def config = [
    applicationName: 'product-api'
]

node {
    checkout scm

    sshagent(credentials: ['6a2ed340-be00-4061-9435-50a25d52e3b5']) {
        sh "git clean -ffdx && git clone git@github.com:chrisjstevenson/deployasaurus.git"
    }

    stage name: 'Prepare for Container Build', concurrency: 1
    load('deployasaurus/Jenkinsfile.kube.groovy').configureBuild(config)
}