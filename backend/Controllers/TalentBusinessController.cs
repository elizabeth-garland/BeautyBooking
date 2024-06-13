using System.ComponentModel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Mvc;
using backend.Models.DTOs;
using backend.Services.Interface;
using RouteAttribute = Microsoft.AspNetCore.Mvc.RouteAttribute;

namespace backend.Controllers
{
    [Route("api/talent/business")]
    [ApiController]
    // [Authorize(Roles = $"{Role.RoleNames.Talent}")] - add later
    [Produces("application/json")]
    public class TalentBusinessController : ControllerBase
    {
        // Declare services
        private readonly ITalentBusinessService _talentBusinessService;

        public TalentBusinessController(ITalentBusinessService talentBusinessService)
        {
            _talentBusinessService = talentBusinessService;
        }

        // Get business info
        [HttpGet("{businessId}")]
        public IActionResult GetBusinessProfile([FromRoute] string businessId)
        {

            try
            {
                var talentBusiness = _talentBusinessService.GetBusinessByIdAsync(businessId);
                return Ok(talentBusiness); //can this be extended
            }
            catch (ArgumentException e)
            {
                return BadRequest(e);
            }
        }

        // Edit business info ...
    }
}