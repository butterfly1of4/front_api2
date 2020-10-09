import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

// ;<Button as={Link} to='/home'>
//   To homepage
// </Button>

const ButtonColored = () => (
  <div>
    <Button color='red'>Red</Button>
    <Button color='orange'>Orange</Button>
    <Button color='yellow'>Yellow</Button>
    <Button color='olive'>Olive</Button>
    <Button color='green'>Green</Button>
    <Button color='teal'>Teal</Button>
    <Button color='blue'>Blue</Button>
    <Button color='violet'>Violet</Button>
    <Button color='purple'>Purple</Button>
    <Button color='pink'>Pink</Button>
    <Button color='brown'>Brown</Button>
    <Button color='grey'>Grey</Button>
    <Button color='black'>Black</Button>
  </div>
)

export default ButtonColored




// <div><button class="ui red button">Red</button><button class="ui orange button">Orange</button><button class="ui yellow button">Yellow</button><button class="ui olive button">Olive</button><button class="ui green button">Green</button><button class="ui teal button">Teal</button><button class="ui blue button">Blue</button><button class="ui violet button">Violet</button><button class="ui purple button">Purple</button><button class="ui pink button">Pink</button><button class="ui brown button">Brown</button><button class="ui grey button">Grey</button><button class="ui black button">Black</button></div>