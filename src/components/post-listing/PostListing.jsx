import React from "react";
import styles from "./PostListing.module.css";
import Button from "../button/Button";
import Input from "../input/Input";

function PostListing() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.post_listing}>
      <Input
        attribute="listingType"
        labelText="listung type"
        input={
          <select name="listingType" id="listingType" className={styles.select}>
            <option value="rent">Rent</option>
          </select>
        }
      />
      <Input
        attribute="address"
        labelText="address"
        type="text"
        placeholder="Enter the full address"
      />
      <div className={styles.double_inputs_container}>
        <Input
          attribute="beds"
          labelText="beds"
          type="number"
          placeholder="Number of beds"
        />
        <Input
          attribute="baths"
          labelText="baths"
          type="number"
          placeholder="Number of baths"
        />
      </div>
      <Input
        labelFor="roomType"
        labelText="room type"
        input={
          <select name="roomType" id="roomType" className={styles.select}>
            <option value="select">Select</option>
          </select>
        }
      />
      <div className={styles.double_inputs_container}>
        <Input
          attribute="rent"
          labelText="rent ($)"
          type="number"
          placeholder="Enter rent amount"
        />
        <Input
          attribute="utilities"
          labelText="utilities ($)"
          type="number"
          placeholder="Enter utilities cost"
        />
      </div>
      <Input
        attribute="total"
        labelText="total ($)"
        type="number"
        placeholder="Enter total cost"
      />
      <Input attribute="moveByDate" labelText="move by date" type="date" />
      <Button buttonText="post listing" />
    </form>
  );
}

export default PostListing;
