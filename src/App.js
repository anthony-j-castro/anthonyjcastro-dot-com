import React, { Component } from 'react';
import Media from 'react-media';

import { Switch, Route } from 'react-router-dom';

import ScrollToTop from 'components/ScrollToTop';
import Header from 'components/Header';
import Home from 'components/home/Home';
import About from 'components/about/About';
import WorkSamples from 'components/work-samples/WorkSamples';
import Resume from 'components/resume/Resume';
import Contact from 'components/contact/Contact';
import MobileNavigation from 'components/MobileNavigation';
import NotFound from 'components/NotFound';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.contentRef = React.createRef();

    this.scrollToTopOfContent = this.scrollToTopOfContent.bind(this);
  }

  scrollToTopOfContent() {
    this.contentRef.current.scrollTop = 0;
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div id="content" ref={this.contentRef}>
          <ScrollToTop scrollCallback={this.scrollToTopOfContent}>
            <main>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/work-samples" component={WorkSamples} />
                <Route path="/resume" component={Resume} />
                <Route path="/contact" component={Contact} />
                <Route component={NotFound} />
              </Switch>
            </main>
          </ScrollToTop>
        </div>
        <Media query="(max-width: 600px)">
          { (matches) => (matches ? (<MobileNavigation />) : null) }
        </Media>
      </React.Fragment>
    );
  }
}

export default App;
