
<script type="text/javascript" charset="utf-8">
    // Import icons
	import { 
	  FlagIcon, 
	  InfoIcon,
	  HelpCircleIcon,
	  DatabaseIcon,
	  CloudOffIcon,
	  FileTextIcon
	  } 
	from 'svelte-feather-icons';


  let isModalOpen = false;
  
  function openModal() {
    if (isModalOpen = false) {
      return isModalOpen = true
    }
  }
  function closeModal() {
    if (isModalOpen = true) {
      return isModalOpen = false
    }
  }
  
</script>

<aside class="flex items-start h-screen overflow-hidden bg-secondary-50-900-token shadow-lg shadow-inner">
  <div class="flex flex-col justify-between w-20 bg-secondary-50-900-token">
    <nav class="mt-5 mb-10 flex flex-col justify-center bg-secondary-50-900-token">
      <a class="flex flex-col justify-center items-center drop-shadow-lg w-full" href="/">
        <img 
          style="transform: scale(1.3)"
          src="https://res.cloudinary.com/djglhdlln/image/upload/v1688410073/Logos/TypeSymbolicGradient_dwkabn.png" alt="logo"
          class="object-cover w-12 h-12 mb-3 mt-3">
      </a>
      <div class="mt-5">
        <ul class="space-y-3 flex flex-col items-center justify-center mb-10">
          <div class="p-1 text-sm">
            <p>PÁGINAS</p>
          </div>
          <li
            class="mb-10 text-center shadow-lg text-secondary-900-50-token btn hover:bg-success-900-50-token hover:text-success-50-900-token btn-sm variant-filled-tertiary p-3">
            <a href="/" class="transition duration-200 ease-in-out transform hover:scale-95 text-center">
              <p class="mx-auto text-center">
                <FlagIcon />
              </p>
            </a>
          </li>
          <li
            class="mb-3 text-center shadow-lg text-secondary-900-50-token btn hover:bg-success-900-50-token hover:text-success-50-900-token btn-sm variant-filled-tertiary p-3">
            <a href="/sobre"
              class="transition duration-200 ease-in-out transform hover:scale-95 text-center">
              <p class="mx-auto text-center">
                <InfoIcon />
              </p>
            </a>
          </li>
          <li
            class="mb-3 text-center shadow-lg text-secondary-900-50-token btn hover:bg-success-900-50-token hover:text-success-50-900-token btn-sm variant-filled-tertiary p-3">
            <a href="/recursos"
              class="transition duration-200 ease-in-out transform hover:scale-95 text-center">
              <p class="mx-auto text-center">
                <DatabaseIcon />
              </p>
            </a>
          </li>
          <li
            class="mb-3 text-center shadow-lg text-secondary-900-50-token btn hover:bg-success-900-50-token hover:text-success-50-900-token btn-sm variant-filled-tertiary p-3">
            <a href="/perguntas-frequentes"
              class="transition duration-200 ease-in-out transform hover:scale-95 text-center">
              <p class="mx-auto text-center">
                <HelpCircleIcon />
              </p>
            </a>
          </li>
          <div class="p-1 text-sm">
            <p class="mt-5">MAIS</p>
          </div>
          <li
            class="mb-3 text-center shadow-lg text-secondary-900-50-token btn hover:bg-success-900-50-token hover:text-success-50-900-token btn-sm variant-filled-tertiary p-3">
            <a href="https://docs.google.com/document/d/1I0hgjf2MoJg_bJQKrJB4EnENfiJXVs8G/edit?usp=drivesdk&ouid=113732401299139248092&rtpof=true&sd=true"
              class="transition duration-200 ease-in-out transform hover:scale-95 text-center">
              <p class="mx-auto text-center">
                <CloudOffIcon />
              </p>
            </a>
          </li>
          <li
            class="mb-3 text-center shadow-lg text-secondary-900-50-token btn hover:bg-success-900-50-token hover:text-success-50-900-token btn-sm variant-filled-tertiary p-3">
            <a href="https://docs.google.com/document/d/1EkZQi2ubDCpaCz8InnxK8GKx8LH6PRHt/edit?usp=drivesdk&ouid=113732401299139248092&rtpof=true&sd=true"
              class="transition duration-200 ease-in-out transform hover:scale-95 text-center">
              <p class="mx-auto text-center">
                <FileTextIcon />
              </p>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</aside>