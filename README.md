# Action Cable Node
Action Cable extracted from Rails 5 and packaged as a Node module

## Install

```
npm install action-cable-node --save
```

## Usage

It has all the same methods as ActionCable and is usage is exactly the same.

```
import ActionCable from 'action-cable-node'

const App = {}

App.cable = ActionCable.createConsumer()

App.cable.subscriptions.create({ channel: "ChatChannel", room: "Best room!"})

etc...
```

See the ActionCable [documentation](http://edgeguides.rubyonrails.org/action_cable_overview.html) for more.

## License

#### The MIT License (MIT)

Based on ActionCable, converted into a node module format by Tom Chinery <hello@tomchinery.com>.

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the “Software”), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.