export default function ContactUs() {
  return (
    <div id="contact" className=" bg-red-500 p-y-12 text-white text-xl ">
      <div className=" lg:flex bg-white text-red-700 items-center text-center  justify-center">
        <p className="p-4 lg:p-8">Name of Turf</p>
        <p className="p-4 lg:p-8">Phone number</p>
        <p className="p-4 lg:p-8">Timing</p>
        <p className="p-4 lg:p-8">Email</p>
      </div>

      <div>
        <div className=" lg:flex justify-evenly pt-12 pb-12">
          <img
            className="h-auto max-w-[60%] md:max-w-[40%] m-auto md:m-0"
            src="https://img.freepik.com/free-photo/3d-cartoon-pin-location_23-2151642263.jpg?t=st=1720792254~exp=1720795854~hmac=f75397b8431dcb0aab630b8d2644b8ec1aedae7a6dd6a66abc4be62e76f7d9ce&w=900"
            alt="kuch toh hai"
          />

          <div className=" text-center md:text-2xl space-y-4 md:space-y-8  justify-center mt-12 md:mt-24">
            <p>Address details / where to find us</p>
            <p>cillum dolore eu fugiat nulla .</p>
            <p>cillum eu fugiat nulla pariatur.</p>
            <p>cillum nulla pariatur.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
