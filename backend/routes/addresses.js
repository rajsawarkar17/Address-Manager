const express = require('express')
const router  = express.Router();
const Address = require('../models/address')

// GET api/addresses
router.get('/', async(req, res) => {
    try{
        const addresses = await Address.find();
        res.json(addresses);
    }
    catch(err){
        res.status(500).send('Server Error');
    }
});

router.post('/', async(req,res) => {
    const {street, city,state, country, postalCode} = req.body;
    try{
        const newAddress = new Address({
            street,
            city,
            state,
            country,
            postalCode
        });

        const address = await newAddress.save();
        res.json(address);
    }catch(err){
        res.status(500).send('Server Error')
    }
})

router.delete('/:id', async (req, res) => {
    try {
      let address = await Address.findById(req.params.id);
  
      if (!address) return res.status(404).json({ msg: 'Address not found' });
  
      // await Address.findByIdAndRemove(req.params.id);
      await Address.findByIdAndDelete(req.params.id);

      res.json({ msg: 'Address removed' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
});

router.get('/:id', async (req, res) => {
  try{
    const address = await Address.findById(req.params.id);
    res.json(address);
  }
  catch(err){
      res.status(500).send('Server Error');
  }
});

router.put('/:id', async (req, res) => {
  const { street, city, state, country, postalCode } = req.body;

  // Input validation
  if (!street || !city || !state || !country || !postalCode) {
    return res.status(400).json({ error: { message: 'All fields are required' } });
  }

  try {
    // Find the address by ID
    let address = await Address.findById(req.params.id);

    // Check if the address exists
    if (!address) {
      return res.status(404).json({ error: { message: 'Address not found' } });
    }

    // Update the address
    address = await Address.findByIdAndUpdate(
      req.params.id,
      { $set: { street, city, state, country, postalCode } },
      { new: true }
    );

    // Return the updated address
    res.json(address);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: { message: 'Server Error' } });
  }
});

  
module.exports = router;