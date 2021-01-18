import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Dog from '../images/dog.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

export class TabSection extends Component {
  componentDidMount(){
    AOS.init({
      duration : 1000
    })
  }


    render() {
      
        return (
            <div className="Overflow-x" >
            <Tabs >
    <TabList   id="INFO">
      <Tab >GROOMING</Tab>
      <Tab>TRAITS</Tab>
      <Tab>TEMPERMENT</Tab>
      <Tab>OWNERSHIP</Tab>
      <Tab>HISTORY</Tab>
    </TabList>

    <TabPanel >
    <div className="Flex">
         
    <div className="LeftTabContainer">
  
            <img src={Dog} alt="" data-aos='slide-right'/>
        
    </div>

    <div className="RightTabContainer Overflow-x">
 
      <p  data-aos='slide-left'  data-aos-duration="1000">The Rottweiler has what’s called a double coat. The medium-length outer coat is straight, coarse and dense, lying flat on the body. The soft, downy undercoat is present on the neck and thighs, and its thickness depends on whether you live in a cool or warm climate. A Rottie’s coat is shortest on the head, ears, and legs, longest on breeching (the hair on the hind thighs).
      </p>

      <p  data-aos='slide-left'  data-aos-duration="1200">
      The Rottweiler’s coat sheds moderately — in other words, more than you might think — but requires little grooming. Brush him weekly with a rubber hound mitt or soft bristle brush to keep the hair and skin healthy. In spring and fall, he will have a heavy shed, known as “blowing out” the coat and will need to be brushed more frequently to get rid of all the loose hair.
      </p>

      <p  data-aos='slide-left' data-aos-duration="1300">
      Bathe the Rottie as you desire or only when he gets dirty. With the gentle dog shampoos available now, you can bathe a Rottie weekly if you want without harming his coat.
      </p>

      <p  data-aos='slide-left'  data-aos-duration="1400">
      Clean the ears as needed with a solution recommended by your veterinarian. Don’t use cotton swabs inside the ear; they can push gunk further down into it. Wipe out the ear with a cotton ball, never going deeper than the first knuckle of your finger.
      </p>

      <p  data-aos='slide-left'  data-aos-duration="1500">
      Trim the nails regularly, usually every couple of weeks. They should never be so long that they click on the floor. And don't forget to brush the teeth frequently with a vet-approved pet toothpaste.</p>
    </div>

    </div>
    </TabPanel>

    <TabPanel>
    <div className="Flex">
         
    <div className="LeftTabContainer">
  
            <img src={Dog} alt="" data-aos='slide-right'/>
        
    </div>

    <div className="RightTabContainer Overflow-x"  >

      <h1 data-aos='slide-left'  data-aos-duration="1100" >HEIGHT</h1>
      <p data-aos='slide-left'  data-aos-duration="1100">The Rottweiler stands 61–69 cm (24–27 in) at the withers for males, 56–63 cm (22–25 in) for females
      </p>

      <h1 data-aos='slide-left'  data-aos-duration="1200">WEIGHT</h1>
      <p data-aos='slide-left'  data-aos-duration="1200">
      Weight must be between 50 and 60 kg (110 and 132 lbs) for males and 35 and 48 kg (77 and 105 lbs) for females.  Weight must be relative to height.
      </p>

      <h1 data-aos='slide-left'  data-aos-duration="1300">LIFE SPAN</h1>
      <p data-aos='slide-left'  data-aos-duration="1300">
      8 to 15 years
      </p>

      <h1 data-aos='slide-left'  data-aos-duration="1400">FCI</h1>
      <p data-aos='slide-left'  data-aos-duration="1400">
      Group 2, <br/>
      Section 2.1<br/>
      Mollossian<br/>
      Mastiff Type<br/>
      #147
      </p>

        <h1 data-aos='slide-left'  data-aos-duration="1500">AKC</h1>
      <p data-aos='slide-left'  data-aos-duration="1500">Working Dog</p>
    </div>

    </div>
    </TabPanel>

    <TabPanel>
    <div className="Flex">
         
    <div className="LeftTabContainer">
  
            <img src={Dog} alt="" data-aos='slide-right'/>
        
    </div>

    <div className="RightTabContainer Overflow-x"  >
 
      <p data-aos='slide-left'  data-aos-duration="1100">The Rottweiler is "a calm, confident, and courageous dog with a self-assured aloofness that does not lend itself to immediate and indiscriminate friendships." Some Rottweilers are serious dogs, while others are happy-go-lucky. In general, the Rottweiler tends to respond quietly and with a wait-and-see attitude to influences in his environment.
      </p>

      <p data-aos='slide-left'  data-aos-duration="1200">
      Rottweilers needs space and exercise: brisk daily walks, interactive play sessions, and regular opportunities to stretch out and run. Mental exercise is even more important.
      </p>

      <p data-aos='slide-left'  data-aos-duration="1300">
      Mental exercise includes obedience classes, agility classes, or even Schutzhund classes. Schutzhund combines protection, obedience, and tracking.
      </p>

      <p data-aos='slide-left'  data-aos-duration="1400">
      Rottweilers must be socialized at an early age so that their territorial instincts are controlled.
      </p>

      <p data-aos='slide-left'  data-aos-duration="1500">
      Most Rottweilers are inclined toward dominance and will test for position in the family pecking order. But they will respect an assertive owner who knows how to lead a strong-minded dog.
      </p>
    </div>

    </div>
    </TabPanel>

    <TabPanel>
    <div className="Flex">
         
    <div className="LeftTabContainer">
  
            <img src={Dog} alt="" data-aos='slide-right'/>
        
    </div>

    <div className="RightTabContainer Overflow-x"  >
 
      <p data-aos='slide-left'  data-aos-duration="1100">As much as you might fancy owning a regal Rottweiler forever, there are definitely cases where a Rottie IS NOT the dog for you! These are some examples that show when it is not the right time to acquire a Rottweiler
      </p>

      <h1 data-aos='slide-left'  data-aos-duration="1200">Legal Issues</h1>
      <p data-aos='slide-left'  data-aos-duration="1200">
       Some communities do not allow Rottweilers, who’ve been labeled as a “Bully Breed”. Additionally, some insurances companies will not cover your home or possessions if you own a Rottie.
      </p>

      <h1 data-aos='slide-left'  data-aos-duration="1300">Space Issues</h1>
      <p data-aos='slide-left'  data-aos-duration="1300">
       If you live in a space that is cramped for you, it will be cramped for a Rottie, too.
      </p>

      <h1 data-aos='slide-left'  data-aos-duration="1400">Exercise </h1>
      <p data-aos='slide-left'  data-aos-duration="1400">
      Obedient and healthy dogs need to burn off their excess energy, and unless you can get them outdoors several times daily to do so, you may want to reconsider your preferred dog breed.
      </p>

      <h1 data-aos='slide-left'  data-aos-duration="1500">Tight Finances</h1>
      <p data-aos='slide-left'  data-aos-duration="1500">
       If you are already struggling to make “ends meet”, adding Rottweiler to your budget isn’t wise. He will require regular veterinary care, much paraphernalia, and lots of food! In a tight budget scenario, wisdom dictates this is NOT the time to take on a large pet!</p>

       <h1 data-aos='slide-left'  data-aos-duration="1600">Tight Schedule</h1>
      <p data-aos='slide-left'  data-aos-duration="1600">
       Some people have schedules that allow no extra time whatsoever.</p>

      <p data-aos='slide-left'  data-aos-duration="1700">
      The most important thing you can ever give a Rottie is your time and attention! House training takes time. Obedience training takes time. Trips to the vet take time.</p>

      <p data-aos='slide-left'  data-aos-duration="1800">
      A Rottweiler who has little human interaction time is not going to be obedient, healthy or happy. This could be a disaster on many levels! If you don’t have a few hours a day to interact with your dog, this is NOT the time to get one.</p>
    </div>

    </div>
    </TabPanel>

    <TabPanel>
    <div className="Flex">
         
    <div className="LeftTabContainer">
   
            <img src={Dog} alt="" data-aos='slide-right'/>
        
    </div>

    <div className="RightTabContainer Overflow-x"  >
 
      <p data-aos='slide-left'  data-aos-duration="1100">The Rottweiler is one of the oldest of herding breeds. With a history possibly dating back to the Roman Empire, the Rottweiler may be a descendant of ancient Roman drover dogs; a mastiff-type dog that was a dependable, rugged dog with great intelligence and guarding instincts.
      </p>

      <p data-aos='slide-left'  data-aos-duration="1200">
      During their quest to conquer Europe, the Roman legions traveled in large numbers across the continent. The lack of refrigeration meant soldiers brought herds of cattle for food.
      </p>

      <p data-aos='slide-left'  data-aos-duration="1300">
      Drover dogs kept the herd together and guarded it at night. Around A.D. 74 the Roman army travelled across the Alps and into what is now southern Germany.
      </p>

      <p data-aos='slide-left'  data-aos-duration="1400">
      For the next two centuries the Roman drover dogs were continually used in herding and driving cattle for trade even after the Romans were driven out of the area by the Swabians.
      </p>

      <p data-aos='slide-left'  data-aos-duration="1500">
      The dog breed was subsequently named after Rottweil, a town in the region. It became an important trade center and the descendants of the Roman cattle dogs proved their worth by driving the cattle to market and protecting the cattle from robbers and wild animals.</p>
    </div>

    </div>
    </TabPanel>
  </Tabs>
            </div>
        )
    }
}

export default TabSection
