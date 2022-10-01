[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<br />
<p align="center">
  <a href="https://slack-man.web.app/assets/images/slackmanager.png">
    <img src="https://slack-man.web.app/assets/images/slackmanager.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Slack Manager</h3>

  <p align="center">
    The ultimate tool for managing files from Slack.!
    <br />
    <a href="https://slack-man.web.app">View Website</a>
    ·
    <a href="https://github.com/miki995/slack-manager-api/issues">Report Bug</a>
    ·
    <a href="https://github.com/miki995/slack-manager-api/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
  * [Deploy](#deploy)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

## About The Project

Main page:

[![Product Name Screen Shot][product-screenshot1]](https://slack-man.web.app)

Dashboard:

[![Product Name Screen Shot][product-screenshot2]](https://slack-man.web.app)

Files page:

[![Product Name Screen Shot][product-screenshot3]](https://slack-man.web.app)

Slack Manager is your best friend when it comes to files overload in your slack workspace.
The app will help you get rid of files easily.

Features:
* Statistics
* Managing files
* Backup files ( by users )
* Delete files (bulk, or selected )


### Built With
* [NestJs](https://nestjs.com)


<!-- GETTING STARTED -->
## Getting Started

Getting started is easy!

### Prerequisites

Install angular

```sh
 npm i -g @nestjs/cli
```

### Installation

1. Create a Slack app at [https://api.slack.com/apps](https://api.slack.com/apps)
2. Clone the repo
```sh
git clone https://github.com/your_username_/Project-Name.git
```
3. Install NPM packages
```sh
npm install
```

### Deploy

/* https://trilon.io/blog/deploying-nestjs-to-zeit-now */

 `npm run build && now`
or `npm run build && vercel --prod`


<!-- USAGE EXAMPLES -->
## Usage

The app will run on localhost:4200 by default, and we need a backend, which will run usually at localhost:300.
The backend repo is :[backend](https://github.com/miki995/slack-manager-api)

In backend, in `main.ts` change this line:

```
app.enableCors({ origin: 'https://slack-man.web.app' });
```

to:

```
app.enableCors({ origin: 'http://localhost:4200' });
```

Change the api callback to this as well in slack api auth0 and permissions section to be able to get right redirection.

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/miki995/slack-manager-api/issues) for a list of proposed features (and known issues) in backend.

See the [open issues](https://github.com/miki995/slack-manager/issues) for a list of proposed features (and known issues) in frontend.

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the GNU3 License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

[@ngquad](https://twitter.com/ngquad) - miroslavmaksimovic95@gmail.com

Project Link: [Slack Manager](https://www.producthunt.com/posts/slack-cleaner)


<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [NestJs](https://nestjs.com)
* [Heroku](https://www.heroku.com/home)



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[issues-shield]: https://img.shields.io/github/issues/miki995/slack-manager-api.svg?style=flat-square
[issues-url]: https://github.com/miki995/slack-manager-api/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/miki95
[product-screenshot1]: https://ph-files.imgix.net/b51bf3f5-0d3a-4e5e-a773-c99885798d7b.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=751.4124293785311&h=380&fit=max&dpr=2
[product-screenshot2]: https://ph-files.imgix.net/80d4388e-7acc-47a9-8c95-a506a03b2d34.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=795.3778751369114&h=380&fit=max&dpr=2
[product-screenshot3]: https://ph-files.imgix.net/f972f702-19ef-4b33-9346-13169fa4d975.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=805.8693244739757&h=380&fit=max&dpr=2
