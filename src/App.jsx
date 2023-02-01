import { useState } from 'react'
import Button from './Button'
import Alert from './Alert'
import { FiAlertOctagon } from 'react-icons/fi';
import Badge from './Badge';

function App() {

  return (
    <div className="text-slate-200">
      <h1 className='text-5xl text-center'>React Component Library</h1>

      <div className='flex flex-col gap-4 my-8 px-12 py-6 rounded-xl w-3/4 bg-slate-600 mx-auto'>
        <div className='flex flex-col gap-4'>
          <h2 className='text-3xl'>Button</h2>
          <div>
            <p>Button with no attribute props and default values:</p>
            <Button callback={() => { alert('Heyoo') }} title="Default Button" />
          </div>

          <div>
            <p>Button with disabled attribute and default style:</p>
            <Button callback={() => { alert('Heyoo') }} title="Default Button" disabled />
          </div>

          <div>
            <p>Button with color attribute Purple:</p>
            <Button callback={() => { alert('Heyoo') }} color="purple" title="Purple Button" />
          </div>

          <div>
            <p>Button with color attribute Purple and size attribute large:</p>
            <Button callback={() => { alert('Heyoo') }} color="purple" size="large" title="Purple Button" />
          </div>

          <div>
            <p>Button with color attribute gray and size attribute xlarge:</p>
            <Button callback={() => { alert('Heyoo') }} color="gray" size="xlarge" title="Purple Button" />
          </div>
        </div>

        <div className='flex flex-col gap-4 my-4'>
          <h2 className='text-3xl'>Alert</h2>
          <div>
            <p>Alert with no attribute props and default values:</p>
            <Alert>You did something wrong and you should feel bad.</Alert>
          </div>

          <div>
            <p>Alert with an icon, but no style attribute props:</p>
            <Alert Icon={FiAlertOctagon}>You did something wrong and you should feel bad.</Alert>
          </div>

          <div>
            <p>Alert with an icon and color attribute blue:</p>
            <Alert Icon={FiAlertOctagon} color="blue">You did something wrong and you should feel bad.</Alert>
          </div>

        </div>

        <div className='flex flex-col gap-4 my-4'>
          <h2 className='text-3xl'>Badge</h2>
          <div>
            <p>Badge with no attribute props and default values:</p>
            <Badge title="Default Badge" />
          </div>

          <div>
            <p>Badge with an icon, but no style attribute props:</p>
            <Badge Icon={FiAlertOctagon} title="Default Icon Badge" />
          </div>

          <div>
            <p>Badge with an icon and color attribute purple:</p>
            <Badge Icon={FiAlertOctagon} color="purple" title="Purple Badge" />
          </div>

          <div>
            <p>Badge with color red and round attribute:</p>
            <Badge color="red" title="Round Badge" round />
          </div>

          <div>
            <p>Badge with large attribute:</p>
            <Badge title="Large Badge" size="large" />
          </div>

          <div>
            <p>Badge with an icon, large and color attribute yellow:</p>
            <Badge Icon={FiAlertOctagon} color="yellow" title="Large Icon Badge" size="large" />
          </div>

          <div>
            <p>Badge with xlarge attribute:</p>
            <Badge title="Extra Large Badge" size="xlarge" />
          </div>

          <div>
            <p>Badge with an icon, xlarge and color attribute yellow:</p>
            <Badge Icon={FiAlertOctagon} color="yellow" title="Extra Large Icon Badge" size="xlarge" />
          </div>



        </div>
      </div>
    </div>
  )
}

export default App
