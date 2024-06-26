using System.ComponentModel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Mvc;
using backend.Models.DTOs;
using backend.Services.Interface;
using RouteAttribute = Microsoft.AspNetCore.Mvc.RouteAttribute;

namespace backend.Controllers
{

    [Route("api/talent/user")]
    [ApiController]
    // [Authorize(Roles = $"{Role.RoleNames.Talent}")] - add later
    [Produces("application/json")]
    public class TalentUserController : ControllerBase
    {
        // Declare services
        private readonly ITalentUserService _talentUserService;

        public TalentUserController(ITalentUserService talentUserService)
        {
            _talentUserService = talentUserService;
        }

        // Get user info
        [HttpGet("{userId}")]
        public IActionResult GetUserProfile([FromRoute] string userId)
        {

            try
            {
                var talentUser = _talentUserService.GetUserByIdAsync(userId);
                return Ok(talentUser); //can this be extended
            }
            catch (ArgumentException e)
            {
                return BadRequest(e);
            }
        }

        // Edit user info ...
        // Edit name, edit bio, edit location, edit contact number, edit email
    }
}