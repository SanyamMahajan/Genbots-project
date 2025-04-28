import React, { useState } from 'react';

const MentorQuerySystem = () => {
  const [mentorName, setMentorName] = useState('');
  const [isSlotSectionVisible, setIsSlotSectionVisible] = useState(false);
  const [isVideoCallSectionVisible, setIsVideoCallSectionVisible] = useState(false);
  const [slot, setSlot] = useState('');
  const [isStartCallVisible, setIsStartCallVisible] = useState(false);

  const selectMentor = (name) => {
    setMentorName(name);
    setIsSlotSectionVisible(true);
  };

  const confirmBooking = () => {
    if (!slot) {
      alert('Please select a slot!');
      return;
    }
    alert(`Slot booked successfully for ${mentorName} at ${slot}`);
    setIsStartCallVisible(true);
  };

  const startRealVideoCall = () => {
    setIsSlotSectionVisible(false);
    setIsVideoCallSectionVisible(true);

    const domain = 'meet.jit.si';
    const options = {
      roomName: 'StartupConnectRoom' + Date.now(),
      width: '100%',
      height: 500,
      parentNode: document.getElementById('jitsi-container'),
      interfaceConfigOverwrite: {
        SHOW_JITSI_WATERMARK: false,
        SHOW_WATERMARK_FOR_GUESTS: false,
      },
      configOverwrite: {
        prejoinPageEnabled: false,
      },
    };
    const api = new window.JitsiMeetExternalAPI(domain, options);
  };

  const endCall = () => {
    alert('Call ended. Thank you for connecting!');
    window.location.reload();
  };

  return (
    <main className="flex-grow container mx-auto px-6 py-12 space-y-12">
      {/* Mentor Selection Section */}
      <section
        id="mentorSection"
        className="bg-white p-8 shadow-2xl rounded-2xl max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Choose Your Mentor
        </h2>
        <div className="grid gap-6">
          <div className="p-4 bg-gray-100 rounded-lg flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-sm text-gray-600">Startup Strategy & Fundraising</p>
            </div>
            <button
              onClick={() => selectMentor('John Doe')}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-full transition duration-300"
            >
              Select
            </button>
          </div>

          <div className="p-4 bg-gray-100 rounded-lg flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
              <p className="text-sm text-gray-600">Marketing & Branding</p>
            </div>
            <button
              onClick={() => selectMentor('Jane Smith')}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-full transition duration-300"
            >
              Select
            </button>
          </div>

          <div className="p-4 bg-gray-100 rounded-lg flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Alice Johnson</h3>
              <p className="text-sm text-gray-600">Business Development</p>
            </div>
            <button
              onClick={() => selectMentor('Alice Johnson')}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-full transition duration-300"
            >
              Select
            </button>
          </div>
        </div>
      </section>

      {/* Slot Booking Section */}
      {isSlotSectionVisible && (
        <section
          id="slotSection"
          className="bg-white p-8 shadow-2xl rounded-2xl max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
            Book Your Slot with <span id="selectedMentor">{mentorName}</span>
          </h2>
          <div className="space-y-6">
            <input
              type="datetime-local"
              id="slotInput"
              className="w-full p-4 rounded-lg bg-gray-100 focus:ring-2 focus:ring-yellow-400 outline-none border border-gray-300"
              value={slot}
              onChange={(e) => setSlot(e.target.value)}
            />
            <button
              onClick={confirmBooking}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded-lg transition duration-300"
            >
              Confirm Booking
            </button>
          </div>
          {isStartCallVisible && (
            <div id="startCallDiv" className="mt-6">
              <button
                onClick={startRealVideoCall}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition duration-300"
              >
                Start Video Call
              </button>
            </div>
          )}
        </section>
      )}

      {/* Video Call Section */}
      {isVideoCallSectionVisible && (
        <section
          id="videoCallSection"
          className="bg-white p-8 shadow-2xl rounded-2xl max-w-5xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
            Video Call with <span id="callMentor">{mentorName}</span>
          </h2>
          <div id="jitsi-container" className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg mb-6"></div>
          <button
            onClick={endCall}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg transition duration-300"
          >
            End Call
          </button>
        </section>
      )}
    </main>
  );
};

export default MentorQuerySystem;
