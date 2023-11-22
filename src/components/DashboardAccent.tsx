import React from 'react'
import Icon1 from '/src/assets/section/sect-ico1.svg'
import Icon2 from '/src/assets/section/sect-ico2.svg'
import Icon3 from '/src/assets/section/sect-ico3.svg'
import Icon4 from '/src/assets/section/sect-ico4.svg'

const DashboardAccent = () => {
    return (
        <div>
            <div className='main-section'>
                <section>
                    <div>
                        <img src={Icon1} alt='icon' />
                        <p>USERS</p>
                        <h2>100</h2>
                    </div>
                </section>
                <section>
                    <div>
                        <img src={Icon2} alt='icon' />
                        <p>ACTIVE USERS</p>
                        <h2>40</h2>
                    </div>
                </section>
                <section>
                    <div>
                        <img src={Icon3} alt='icon' />
                        <p>USERS WITH LOANS</p>
                        <h2>25</h2>
                    </div>
                </section>
                <section>
                    <div>
                        <img src={Icon4} alt='icon' />
                        <p>USERS WITH SAVINGS</p>
                        <h2>32</h2>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default DashboardAccent