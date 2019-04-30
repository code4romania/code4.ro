---
title: "We want our data and we want it now! "
excerpt: "When the subject of voting comes up, the discourse will invariably contain the phrase “informed decisions”. This assumes that the information already exists and the only thing left to be done is for us to soak it up and decide. However, this is only half the story, and it’s not even the exciting half."
cover: moonsheep.png

date: 2018-08-13
author: Sabina-Alexandra Ștefănescu
---

There is no “information about the state of things”, lying around as a dusty tome in a library. And, even if we hate to admit it, there is no website that will give you a full run-down of what has happened in recent history. Before we can even begin to talk of deciding, the subject of informing ourselves has to be tackled first.

There are two parts to information, the kind that can lead to someone making up their mind. There is raw data, and there are conclusions drawn from that data. It might be counter-intuitive, but gathering the raw data in the first place is hard. Data isn't guarded by watchdogs or sealed away, far from the hands of those who need it. It's simply hard to find, read, and distribute.

{{< figure src="moonsheep.png" >}}

Let's take a look at a shining example of this problem: every person is under obligation to declare their assets and revenue. The documents that contain this information are available to the public to scrutinize. However, at the time of writing this article, some of these document are scanned papers available as .pdf documents. Some of the papers were laid out crooked on the scanner. Some of them have been filled out in cursive handwriting, others have been filled out on the computer. These are just a handful of reasons why the declarations are not fit for being submitted to a civilized OCR (Optimal Character Recognition) process.

What we have thus far is a grim picture: the information exists, but having it all in one place, so that people many browse through it, compare declarations historically, and run statistics on the assets declared therein is impossible. Enter [Moonsheep][1]. 

In Hungary, [K-Monitor][2] has made use of Moonsheep in order to digitalize the very same assets declarations, as submitted by their members of Parliament. Attila Juhász,
project coordinator, recalls:

> During one short night our dozens of volunteers transformed more than 2000 pages of scanned PDFs into one searchable and transparent database. Moonsheep is the engine that made this process seamless and successful.

Transcribing 20 pages worth of data is a gruelling task. But splitting the 20 pages up into bite-sized chunks, that a volunteer can transcribe within a matter of a couple of minutes, makes the entire process more like a chain of small, rewarding experience. The Moonsheep platform was built in order to facilitate this exact experience: that each small fragment transcribed can be viewed as a completed task in and of itself, thus keeping volunteers from feeling the fatigue that would normally accompany monolithic tasks. 

## Liberating data, Moonsheep, and you

Say you want to organize a datathon, an event that brings people together and gives them the time, space and applications to transcribe large amounts of data. Moonsheep was conceived to address this exact problem. What follows is a story of what the framework can offer you and how you could set it. 

Start by breaking the documents you want to transcribe into time-efficient tasks. One task corresponds to the transcription of one cohesive fragment inside a document. For example, one task might be to transcribe the name of the person who wrote the declaration, their profession, along with the date the declaration was signed. This decision then generates the data model associated with this task: 

```json
{
  "name": "John Doe",
  "profession": "carpenter",
  "date_completed": "2018-08-01"
}
```

Once you have coupled all useful fragments inside the declarations with a task and its respective data model, it's time to fire up Moonsheep. You can clone [a project template][3] prepared by the Moonsheep team to get you started, or you can fork and customize [one of the existing projects][4]. The [official documentation][5] serves as a step-by-step guide for setting up your scaffolding, made up of very few moving parts:

* a Python 3.5+ interpreter
* the requirements (which you can install using `pip` from the file provided in the project)
* Django, a high-level Python web framework
* PyBossa, a Python crowdsourcing framework
* a database (by default, the project sets up an `sqlite` database)

The developers of Moonsheep have maintained a Python-based ecosystem, which serves us well in reducing complexity. The language itself has a wealth of tutorials and documentation, as well as a very approachable learning curve. IDEs and debugging tools are plentiful when it comes to Python, and packaging your application for distribution is also a painless process. The Moonsheep technical stack is one which favors inclusion and distribution. 

## Data, ahoy!

The Code for Romania team has its eyes on the Moonsheep framework as well. [The "Catalog Politic" project][6] aims to centralize all public data on Romanian elected officials. The development team soon hit the same roadblock described above when it came to data availability: the data is there, but it is impossible to parse automatically. Thus, we are building our own Moonsheep application. A datathon looms on the horizon…


[1]: http://moonsheep.org
[2]: http://k-monitor.hu/fooldal
[3]: https://github.com/themoonsheep/project-template
[4]: https://github.com/themoonsheep?q=project-
[5]: https://docs.google.com/document/d/1HdxOXWgfzClokilRHaRrX897iHI4hTOf5tZd4t930cs/view
[6]: {{< relref "/apps/catalog-politic" >}}
