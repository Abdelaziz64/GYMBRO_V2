import React, { useEffect, useState } from 'react';
import bannerImage from './images/crossfit.jpg';
import fullbody from './images/full_body.jpg';
import strength from './images/strenght.jpg';
import nutrition from './images/nutrition.jpg';
import chest from './images/chestworkouts.jpg';
import biceps from './images/bicepworkouts.jpg';
import triceps from './images/tricepworkouts.jpg';
import calves from './images/calves.jpg';
import forearms from './images/forearms.jpg';
import abs from './images/abs.jpg';
import backworkouts from './images/backworkouts.jpg';
import gluteworkouts from './images/gluteworkouts.jpg';
import legworkouts from './images/legworkouts.jpg';
import shoulderworkouts from './images/shoulderworkout.jpg';

import './header.css'; // Import the CSS file for the header
import './App.css';

import Header from './Header';
import Footer from './footer';
import { FaArrowUp } from 'react-icons/fa';




function App() {
  
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowButton(scrollTop > 200); // Display the button when scrolled down 200 pixels
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  
  const [showTable, setShowTable] = useState(false);
  
  const [filter, setFilter] = useState('');
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState('');
  const [gender, setGender] = useState('');
  const [primaryGoal, setPrimaryGoal] = useState('');
  const [trainingMethod, setTrainingMethod] = useState('');
  const [level, setLevel] = useState('');
  const [trainingDays, setTrainingDays] = useState([]);
  const [workoutTime, setWorkoutTime] = useState('');
  const [routineTable, setRoutineTable] = useState([]);

  const openExercisesWindow = (muscleGroup) => {
    window.open(`https://example.com/exercises/${muscleGroup}`, '_blank');
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleMuscleGroupSelect = (muscleGroup) => {
    setSelectedMuscleGroup(muscleGroup === "All Muscle Groups" ? "" : muscleGroup);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handlePrimaryGoalChange = (event) => {
    setPrimaryGoal(event.target.value);
  };

  const handleTrainingMethodChange = (event) => {
    setTrainingMethod(event.target.value);
  };

  const handleLevelChange = (event) => {
    setLevel(event.target.value);
  };

  const handleTrainingDaysChange = (event) => {
    const selectedDays = Array.from(event.target.options)
      .filter((option) => option.selected)
      .map((option) => option.value);
    setTrainingDays(selectedDays);
  };

  const handleWorkoutTimeChange = (event) => {
    setWorkoutTime(event.target.value);
  };

  const muscleGroups = [
    { name: 'Chest', image: chest,},
    { name: 'Biceps', image: biceps },
    { name: 'Triceps', image: triceps },
    { name: 'Calves', image: calves },
    { name: 'Forearms', image: forearms },
    { name: 'Abs', image: abs },
    { name: 'Back Workouts', image: backworkouts },
    { name: 'Glute Workouts', image: gluteworkouts },
    { name: 'Leg Workouts', image: legworkouts },
    { name: 'Shoulder Workouts', image: shoulderworkouts },
    // Add more muscle groups as needed
  ];

  const [selectedFacets, setSelectedFacets] = useState([]);

  // Fonction pour gérer la sélection des facettes
  const handleFacetSelect = (facet) => {
    // Vérifier si la facette est déjà sélectionnée
    if (selectedFacets.includes(facet)) {
      // La facette est déjà sélectionnée, donc la retirer de la liste
      setSelectedFacets(selectedFacets.filter((f) => f !== facet));
    } else {
      // La facette n'est pas encore sélectionnée, donc l'ajouter à la liste
      setSelectedFacets([...selectedFacets, facet]);
    }
  };

  const generateRoutine = () => {
    // Generate routine logic based on user selections
    const routineTable = [];

    // Loop through each selected training day
    for (let day of trainingDays) {
      const workout = {
        day: day,
        exercises: [],
      };

      // Generate special workout based on user selections
      if (gender === 'male') {
        if (primaryGoal === 'loseFat') {
          // Generate special workout for losing fat (Male)
          // Add exercises to the workout object
          workout.exercises.push('Exercise 1', 'Exercise 2', 'Exercise 3');
        } else if (primaryGoal === 'buildMuscle') {
          // Generate special workout for building muscle (Male)
          // Add exercises to the workout object
          workout.exercises.push('Exercise 4', 'Exercise 5', 'Exercise 6');
        } else if (primaryGoal === 'cardio') {
          // Generate special workout for cardio (Male)
          // Add exercises to the workout object
          workout.exercises.push('Exercise 7', 'Exercise 8', 'Exercise 9');
        }
      } else if (gender === 'female') {
        if (primaryGoal === 'loseFat') {
          // Generate special workout for losing fat (Female)
          // Add exercises to the workout object
          workout.exercises.push('Exercise 10', 'Exercise 11', 'Exercise 12');
        } else if (primaryGoal === 'buildMuscle') {
          // Generate special workout for building muscle (Female)
          // Add exercises to the workout object
          workout.exercises.push('Exercise 13', 'Exercise 14', 'Exercise 15');
        } else if (primaryGoal === 'cardio') {
          // Generate special workout for cardio (Female)
          // Add exercises to the workout object
          workout.exercises.push('Exercise 16', 'Exercise 17', 'Exercise 18');
        }
      }

      routineTable.push(workout);
      setRoutineTable(routineTable);
      setShowTable(true);
    }

    // Display the routine table on the page
    setRoutineTable(routineTable);
  };

  const generateExercises = (day) => {
    // Implement exercise generation logic based on selected options
    // You can generate exercises specific to the selected muscle group or other criteria
    // Example code:
    const exercises = muscleGroups.map((group) => ({
      muscleGroup: group.name,
      // Generate exercises based on muscle group and other selected options
    }));
    return exercises;
  };

  const filteredMuscleGroups = muscleGroups.filter((group) => {
    const isMatchedFilter = group.name.toLowerCase().startsWith(filter.toLowerCase());
  
    if (selectedFacets.length === 0) {
      return isMatchedFilter; // Aucune facette sélectionnée, afficher les correspondances de la recherche
    } else if (selectedFacets.includes('upper body')) {
      return (
        isMatchedFilter &&
        ( // Correspondance de la recherche et facette "upper body"
          group.name === 'Chest' ||
          group.name === 'Biceps' ||
          group.name === 'Triceps' ||
          group.name === 'Shoulder Workouts' ||
          group.name === 'Back Workouts' ||
          group.name === 'Abs' ||
          group.name === 'Forearms'
        )
      );
    } else if (selectedFacets.includes('lower body')) {
      return (
        isMatchedFilter &&
        ( // Correspondance de la recherche et facette "lower body"
          group.name === 'Calves' ||
          group.name === 'Glute Workouts' ||
          group.name === 'Leg Workouts'
        )
      );
    } else {
      return false; // Aucune correspondance
    }
  });


  return (
    <div className="App" style={{ backgroundColor: "#f4f4f4" }}>
      <div>
      <Header />
      </div>

      {showButton && (
        <div className="scroll-up-button" onClick={scrollToTop}>
          <FaArrowUp />
        </div>
      )}


      <section id="banner">
        <div className="catchphrase">
          <h1 className="catchphrase-text">
            Unleash Your Inner Strength
          </h1>
        </div>
        <img className="banner-image" src={bannerImage} alt="Banner" />
      </section>

      <section id="articles">
      <h2 className="articles-title">Articles to Unlock Your Potential</h2>
      </section>
      <div className="articles">
        <article>
          <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8372753/">
            <img className="full-body" src={fullbody} alt="Full Body" />
          </a>
          <p>Full Body article</p>
        </article>
        <article>
          <a href="https://www.health.harvard.edu/staying-healthy/strength-training-builds-more-than-muscles">
            <img className="strength" src={strength} alt="Strength" />
          </a>
          <p>Strength article</p>
        </article>
        <article>
          <a href="https://www.health.harvard.edu/topics/nutrition">
            <img className="nutrition" src={nutrition} alt="Nutrition" />
          </a>
          <p>Nutrition article</p>
        </article>
      </div>

      <section id='exercises'>
  <h2 id="muscle-group-title" className="muscle-group-title">Muscle Groups</h2>
</section>

<div className="search-tool">
  <input
    type="text"
    placeholder="Search muscle group..."
    value={filter}
    onChange={handleFilterChange}
  />
  
  <div className="facets">
    <label>
      <input
        type="checkbox"
        checked={selectedFacets.includes('upper body')}
        onChange={() => handleFacetSelect('upper body')}
      />
      Upper Body
    </label>
    <label>
      <input
        type="checkbox"
        checked={selectedFacets.includes('lower body')}
        onChange={() => handleFacetSelect('lower body')}
      />
      Lower Body
    </label>
  </div>
</div>

<div className="muscle-groups">
  {filteredMuscleGroups.map((group, index) => (
    <div
    key={index}
    className="card"
    onClick={() => openExercisesWindow(group.name)}
  >
    <img src={group.image} alt={group.name} />
    <p>{group.name}</p>
  </div>
  ))}
</div>

      
        
      <section id='build-workout'>
      <h2 className="workout-builder-title">Workout Builder</h2>
      </section>
      
      <div className="workout-builder">
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select id="gender" value={gender} onChange={handleGenderChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="primaryGoal">Primary Goal:</label>
          <select
            id="primaryGoal"
            value={primaryGoal}
            onChange={handlePrimaryGoalChange}
          >
            <option value="">Select Primary Goal</option>
            <option value="loseFat">Lose Fat</option>
            <option value="buildMuscle">Build Muscle</option>
            <option value="cardio">Cardio</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="trainingMethod">Training Method:</label>
          <select
            id="trainingMethod"
            value={trainingMethod}
            onChange={handleTrainingMethodChange}
          >
            <option value="">Select Training Method</option>
            <option value="resistance">Resistance</option>
            <option value="strength">Strength</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="level">Level:</label>
          <select id="level" value={level} onChange={handleLevelChange}>
            <option value="">Select Level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="workoutTime">Workout Time:</label>
          <select
            id="workoutTime"
            value={workoutTime}
            onChange={handleWorkoutTimeChange}
          >
            <option value="">Select Workout Time</option>
            <option value="30">30 minutes</option>
            <option value="45">60 minutes</option>
            <option value="60">90 minutes</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="trainingDays">Training Days:</label>
          <select
            id="trainingDays"
            multiple
            value={trainingDays}
            onChange={handleTrainingDaysChange}
          >
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
        </div>

        

        
      </div>

      <button className="generate-button" onClick={generateRoutine}>
          Generate Routine
        </button>

      

      {showTable && (
        
        <table className="routine-table">

          <thead>
            <tr>
              <th>Day</th>
              <th>Exercises</th>
            </tr>
          </thead>
          <tbody>
            {routineTable.map((workout, index) => (
              <tr key={index}>
                <td>{workout.day}</td>
                <td>{workout.exercises.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      
<section id="contact-us" className="contact-section">

  
  <div className="contact-form">
  <h2 className="contact-title">Contact Us</h2>
    <form>
      <div className="form-group">
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" placeholder="First Name" />
      </div>
      <div className="form-group">
        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" placeholder="Last Name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Email" />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" placeholder="Message"></textarea>
      </div>
      <button type="submit">Send Message</button>
    </form>
  </div>
  <div className="map-container">
    <iframe
      title="Google Maps"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3528.248769124608!2d-75.68029215027487!3d45.421987644632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05b6ced05641%3A0x57a01c13e73f9079!2sComplexe%20STEM%20(STM)!5e0!3m2!1sfr!2sca!4v1689122699819!5m2!1sfr!2sca"
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
  
        </section>
        <Footer/>
      </div>
  );

}

export default App;