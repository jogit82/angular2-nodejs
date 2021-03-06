import { Component } from '@angular/core';

@Component({
    selector: 'app-legal',
    templateUrl: 
    `
    <div class="container">
      <div class="panel panel-info">
            <div class="panel-heading">Legal</div>
            <div class="panel-body">
                <div id="main" role="main">
                    <div class="centered">
                        <div id="admin-survey">
                            <div class="survey-link">
                            <h1>Legal Mumbo-Jumbo</h1>
                            <p>
                                Qwk.io is a rapid surveying tool currently operating in beta. That means you should not rely on Qwk.io for hugely
                                important surveys, such as elections. Qwk.io makes every effort to operate a reliable, scalable service… but then
                                again so does Twitter, and look at them. We may experience planned or unplanned downtime with no notice. We may
                                experience programming or administrative errors that produce dubious survey results.
                            </p>
                            <p>
                                Qwk.io reserves the right to remove surveys and/or responses that are offensive, by our sole and possibly capricious
                                judgment. Qwk.io further reserves the right to remove or redirect surveys which are promoted by spam or other unsavory
                                practices. Qwk.io further further reserves the right to remove any survey or any response for any reason whatsoever.
                            </p>
                            <p>
                                In short: This is a very early product being made available to you solely for the purposes of entertainment and
                                testing.  It’s not going to be perfect. And Don’t abuse it.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`
})

export class LegalComponent {

}