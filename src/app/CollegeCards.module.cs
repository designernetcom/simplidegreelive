/* components/CollegeCards.module.css */
.collegeCardContainer {
  padding: 20px;
}

.collegeGridContainer {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  padding: 0;
}

/* Mobile view: Convert grid to horizontal slider */
@media (max-width: 768px) {
  .collegeGridContainer {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
    padding: 10px;
    scroll-behavior: smooth;
    gap: 15px;
  }

  .collegeIndiCard {
    flex: 0 0 auto;
    width: 150px; /* Fixed width for cards in slider */
    scroll-snap-align: start;
    text-align: center;
  }

  /* Hide scrollbar for cleaner look */
  .collegeGridContainer::-webkit-scrollbar {
    display: none;
  }
  .collegeGridContainer {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
}

/* Card styles */
.collegeIndiCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: inherit;
}

.collegeIndiCardImg {
  max-width: 100%;
  height: auto;
}

.collegeIndiCardName {
  margin-top: 10px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
}

/* View All button */
.viewAllContainer {
  text-align: center;
  margin-top: 20px;
}

.viewAll {
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
}

/* Navigation buttons for mobile slider */
.navButton {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
}