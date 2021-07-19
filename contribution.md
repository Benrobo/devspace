# Contributing to DEVSPACE projects

A big welcome and thank you for considering contributing to Devspace open source projects! It’s people like you that make it a reality for users in our community.

Reading and following these guidelines will help us make the contribution process easy and effective for everyone involved. 
It also communicates that you agree to respect the time of the developers managing and developing these open source projects. In return, we will reciprocate that respect by addressing your issue, assessing changes, and helping you finalize your pull requests.

## Getting Started

Contributions are made to this repo via Issues and Pull Requests (PRs). A few general guidelines that cover both:

### Issues

Issues should be used to report problems, request a new feature, or to discuss potential changes before a PR is created. When you create a new Issue, a template will be loaded that will guide you through collecting and providing the information we need to investigate.

If you find an Issue that addresses the problem you're having, please add your own reproduction information to the existing issue rather than creating a new one. Adding a reaction  can also help be indicating to our maintainers that a particular problem is affecting more than just the reporter.

### Pull Requests

PRs to our devspace are always welcome and can be a quick way to get your fix or improvement slated for the next release. In general, PRs should:


### Steps 

1. Fork the repository to your own Github account to have access to all codes
2. Clone the project to your machine using the below command
<pre>
    git clone @github.comurl
</pre>
3. Create a branch locally with a descriptive name
<pre>
    git branch <branch-name>
</pre>
after this, you need to switch to the branch created by using the following codes below
<pre>
    git checkout <branch-name>
</pre>

4. You are restricted from editing any code in <b>app.js</b> all you need to do is add a new <b>box</b> div element to the <b>boxes</b> container.
    Once that upload a PNG image type to <b>uploads</b> folder with your name then replace the image src attribute to the name of your uploaded file.
    Not abbiding to the rules would result in disapproved of PR.
    ed
```javascript
        <div class="box">
            <div class="img-cont">
                <div class="ovl">
                    <div class="img-bg">
                        <img src="img/uploads/<your-uploaded-img-name>" alt="" class="img-fluid">
                    </div>
                </div>
            </div>
            <div class="body">
                <h3><Your name></h3>
                <p><Job Type></p>
                <br>
                <div class="socials">
                    <a href="<your-github-url>" class="info your-github-link">
                        More Info
                    </a>
                </div>
                <br>
            </div>
        </div>
```
    once that is done....

4. Commit changes to your branch created
    <pre>
        git commit -m "descriptive commit message"
    </pre>
5. Add all files
    <pre>
        git add .
    </pre>
5. Following any formatting and testing guidelines specific to this repo
6. Push changes to your fork
    <pre>
        git push -u origin <your-branch-name>
    </pre>
7. Open a PR in our repository and follow the PR template so that we can efficiently review the changes.
8. Wait for confirmation.